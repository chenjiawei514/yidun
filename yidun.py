# -*- encoding: utf-8 -*-
import json
import os
import random
import re
from urllib import parse

import cv2
import execjs
import numpy as np
import requests
from PIL import Image, ImageDraw
from matplotlib import pyplot

from config import yidun_id, yidun_referer

img_dir = 'images/'


def load_js(js_path):
    js_content = ''
    with open(js_path, 'r', encoding='utf-8', errors='ignore') as w:
        js_content += w.read()
    ctx = execjs.compile(js_content, cwd="js")
    return ctx


ctx = load_js('js/core.js')
ctx_fp = load_js('js/core_fp.js')


def get_cb():
    """
    获得易盾请求时携带的cb参数
    :return:
    """
    return ctx.call('get_cb')


def get_fp():
    """
    获得浏览器指纹数据
    """
    return ctx_fp.call('get_fp')


def encrypt_all_tracedata(token, tracedata):
    """
    对轨迹进行加密
    :param token:
    :param tracedata:
    :return:
    """
    return ctx.call('encrpty_tracedata', token, tracedata)


class yidun_crack(object):
    def __init__(self, ip=None):
        self.id = yidun_id
        self.token = ''  # 验证码token，即唯一标识
        self.bg_img_path = ''  # 背景图
        self.front_img_path = ''  # 覆盖图
        self.referer = yidun_referer
        self.ip = ip
        self.fp = ''  # 浏览器指纹，短期内有请求限制，失效会使正确率大幅度降低
        self.total = 0
        self.success = 0
        self.type = 2  # 无太大用
        self.retry_times = 3

    def requests_get(self, url, params=None, headers=None):
        """
        封装请求，由于请求都是get，故只封装了get
        :param url:
        :param params:
        :param headers:
        :return:
        """
        proxy = {
            'http': self.ip
        }
        if headers is None:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
            }
        if (params is not None):
            params = parse.urlencode(params)
            url += '?' + params
        for i in range(self.retry_times):
            try:
                res = requests.get(url=url, headers=headers, proxies=proxy, timeout=3)
                if res.status_code == 200:
                    content = res.content.decode(res.encoding, errors='ignore')
                    return content
            except Exception as ex:
                print(ex)
        raise Exception("该ip无法完成验证")

    def get_yzm(self):
        """
        循环获得验证码，只识别滑块类型的
        """
        # 每次获得验证码时刷新指纹
        self.fp = get_fp()
        # print(self.fp)
        """
        注意，此处请求头需要加上，不加成功率会大幅度降低
        """
        hd = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'no-cache',
            'DNT': '1',
            'Host': 'c.dun.163yun.com',
            'Pragma': 'no-cache',
            'Proxy-Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        }
        while True:
            url = 'http://c.dun.163yun.com/api/v2/get'
            params = {
                "id": self.id,
                "fp": r'' + self.fp,
                "https": "false",
                "type": self.type,
                "version": "2.13.2",
                "dpr": "1.5",
                "dev": "3",
                "cb": r'' + get_cb(),
                "ipv6": "false",
                "runEnv": "10",
                "group": "",
                "scene": "",
                "width": "320",
                "token": self.token,
                "referer": self.referer,
                "callback": "__JSONP_xc2z84x_4"
            }
            content = self.requests_get(url=url, params=params, headers=hd)
            content = re.findall('\((.*?)\)', content)[0]
            json_data = json.loads(content)
            if json_data['data']['type'] == self.type:
                self.token = json_data['data']['token']
                print('滑块验证码', self.token)
                self.bg_img_path = self.download_img(json_data['data']['bg'][0])
                self.front_img_path = self.download_img(json_data['data']['front'][0])
                self.total += 1
                break
            else:
                print('其他验证码')

    def download_img(self, url):
        """
        下载验证码图片
        :param url:
        :return:
        """
        hd = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        }
        img_path = img_dir + self.token + '_' + url.split('/')[-1]
        for i in range(self.retry_times):
            try:
                with open(img_path, 'wb') as w:
                    content = requests.get(url, timeout=3, headers=hd).content
                    w.write(content)
                return img_path
            except Exception as ex:
                pass
        raise Exception('img download Exception')

    def tell_location(self):
        """
        识别缺口位置(@link:https://www.jianshu.com/p/f12679a63b8d)
        """
        img_rgb = cv2.imread(self.bg_img_path)
        img_gray = cv2.cvtColor(img_rgb, cv2.COLOR_BGR2GRAY)
        template = cv2.imread(self.front_img_path, 0)
        res = cv2.matchTemplate(img_gray, template, cv2.TM_CCOEFF_NORMED)
        # 使用二分法查找阈值的精确值
        L = 0
        R = 1
        start = 0
        run = 1
        while run < 20:
            run += 1
            threshold = (R + L) / 2
            # print(threshold)
            if threshold < 0:
                print('Error')
                return None
            loc = np.where(res >= threshold)
            # print(len(loc[1]))
            if len(loc[1]) > 1:
                L += (R - L) / 2
            elif len(loc[1]) == 1:
                start = loc[1][0]
                print('目标区域起点x坐标为：%d' % start)
                break
            elif len(loc[1]) < 1:
                R -= (R - L) / 2
        distance = int(start)
        self.draw_line(distance)
        os.remove(self.front_img_path)
        os.remove(self.bg_img_path)
        # 通过跟踪发现，最终的轨迹落点x轴位置会大10px
        return distance + 10

    def draw_line(self, x):
        # 绘制一条竖线标记位置，方便查看效果
        img = Image.open(self.bg_img_path)
        img_draw = ImageDraw.Draw(img)
        img_draw.line((x, 0, x, img.size[1]), 'red')
        img.save(self.bg_img_path.replace('.jpg', '.png'))

    def generate_tracedata(self, distance):
        """
        模拟生成轨迹
        """
        # 初速度
        v = 0
        a = 10000 * 5
        t = 20
        # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
        tracks_list = []
        # 当前的位移
        current = 0
        mistack = 4
        while current < distance:
            # 加速度越小，单位时间的位移越小,模拟的轨迹就越多越详细
            a += random.randint(0, 2000 * 5)
            # 初速度
            v0 = v
            s = v0 * t / 1000 + 0.5 * a * ((t / 1000) ** 2)
            # 当前的位置
            current += s
            # 速度已经达到v,该速度作为下次的初速度
            v = v0 + a * t / 1000
            # 添加到轨迹列表
            if current < distance:
                tracks_list.append(round(current))
        # 先靠近缺口
        if distance - current > mistack or current > distance:
            current = distance - mistack
            tracks_list.append(round(current))
        # 减速慢慢滑
        if round(current) < distance:
            start = round(current) + 1
        else:
            start = tracks_list[-1] + 1
        while start < distance + 1:
            start += random.randint(0, 2)
            tracks_list.append(start)
        # 回退
        # for _ in range(back):
        #     current -= random.randint(1, 3)
        #     tracks_list.append(round(current))
        # tracks_list.append(round(current) - 1)
        if tracks_list[-1] != distance:
            tracks_list.append(distance)
        # 生成时间戳列表
        timestamp_list = []
        timestamp = 0
        for i in range(len(tracks_list)):
            t = 10 + random.randint(9, 18)
            timestamp += t
            timestamp_list.append(timestamp)
        y_list = []
        for j in range(len(tracks_list)):
            y = random.choice(
                [0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -2, -2, -2, -2, -3, -3])
            y_list.append(y)
        trace = []
        for index, x in enumerate(tracks_list):
            trace.append([x, y_list[index], timestamp_list[index]])
        return trace

    def verify_yzm(self, data):
        """
        验证验证码
        :param data:
        """
        url = 'http://c.dun.163yun.com/api/v2/check'
        params = {
            'id': self.id,
            'token': self.token,
            'acToken': '',
            'data': r'' + data,
            'width': '320',
            'type': self.type,
            'version': '2.13.2',
            'cb': r'' + get_cb(),
            'extraData': '',
            'runEnv': '10',
            'referer': self.referer,
            'callback': '__JSONP_372jva9_2'
        }
        content = self.requests_get(url=url, params=params)
        content = re.findall('\((.*?)\)', content)[0]
        json_data = json.loads(content)
        if 'data' in json_data and json_data['data']['result']:
            self.success += 1
            print('校验成功，validate：', json_data['data']['validate'])
        elif 'data' not in json_data:
            print('校验失败', json_data)
        else:
            print('校验失败')

    def get_success_rate(self):
        if self.total == 0:
            return str(0) + '%'
        else:
            return str(round(self.success / self.total, 2) * 100) + '%'

    def draw_tracks(self, tracedata):
        x_list = [item[2] for item in tracedata]
        y_list = [item[0] for item in tracedata]
        pyplot.plot(x_list, y_list)
        pyplot.show()

    def run(self, ip=None):
        self.ip = ip
        self.get_yzm()
        distance = self.tell_location()
        tracedata = self.generate_tracedata(distance)
        print(tracedata)
        self.draw_tracks(tracedata)
        encrypt_data = encrypt_all_tracedata(yidun.token, tracedata)
        # print(encrypt_data)
        self.verify_yzm(encrypt_data)

    def __del__(self):
        print('结束，正确率为：', self.get_success_rate())


if __name__ == '__main__':
    # 删除验证码图片
    for file in os.listdir(img_dir):
        os.remove(img_dir + file)
    yidun = yidun_crack()
    for i in range(1):
        yidun.run()
