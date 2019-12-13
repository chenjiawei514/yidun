# -*- encoding: utf-8 -*-
import time

from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

from yidun import yidun_crack

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--start-maximized")


class chrome_test(object):
    def __init__(self):
        self.driver = webdriver.Chrome(options=chrome_options)
        # self.driver.get('https://dun.163.com/trial/jigsaw')
        self.driver.get('http://localhost:63342/yidun/index.html?_ijt=1v4ljncju1r9naf69h6p4nt0k6')

    def run(self):
        # 滚动到顶部进行tab页切换
        self.driver.execute_script("window.scrollTo(0,0)")
        self.driver.find_element_by_xpath("//li[@captcha-mode='embed']").click()
        # 网页异步加载，等待拖动按钮出现
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'yidun_slider'))
        )
        button_element = self.driver.find_element_by_class_name('yidun_slider')
        ActionChains(self.driver).move_to_element(button_element).perform()
        # 下载验证码进行识别
        yidun = yidun_crack()
        bg_img_src = self.driver.find_element_by_class_name("yidun_bg-img").get_attribute("src")
        bg_img_path = yidun.download_img(bg_img_src)
        front_img_src = self.driver.find_element_by_class_name("yidun_jigsaw").get_attribute("src")
        front_img_path = yidun.download_img(front_img_src)
        yidun.bg_img_path = bg_img_path
        yidun.front_img_path = front_img_path
        distance = yidun.tell_location()
        tracks = yidun.generate_tracedata(distance)
        print(tracks)
        # 进行拖动
        ActionChains(self.driver).click_and_hold(button_element).perform()
        t1 = int(time.time() * 1000)
        for i in range(len(tracks)):
            x = tracks[i]
            x_offset = x[0] if i == 0 else x[0] - tracks[i - 1][0]  # x轴距离差
            y_offset = x[1]
            ActionChains(self.driver).move_by_offset(x_offset, y_offset).perform()
            t = int(time.time() * 1000) - t1
            print(t, x_offset)
            tracks[i][2] = t
        ActionChains(self.driver).release().perform()
        yidun.draw_tracks(tracks)

    def __del__(self):
        self.driver.close()


if __name__ == '__main__':
    c = chrome_test()
    flag = True
    while flag:
        c.run()
        flag = input('按回车键继续：') == ''
        c.driver.refresh()
