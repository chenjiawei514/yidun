易盾滑块验证码破解
=
# 前置准备
- matplotlib 绘制轨迹方便总结规律
- Pillow
- opencv_python
- numpy
- 注意需要node环境（安装后pycharm需要重启）
# 项目构成
- [public](public)文件夹中为扣下来的源码文件，主要的加密信息都在[core.v2.13.2.min.js](public/assets/core.v2.13.2.min.js)该文件中，可修改进行调试（不能修改太多，不然可能会造成无法加载）。使用方法：可以在pycharm中用浏览器打开[index.html](index.html)尽情调试（已屏蔽易盾/collect接口）
- [js](js)文件夹下是抠出来的用于加密的方法。[core.js](js/core.js)文件是核心，用于加密的，[core_fp.js](js/core_fp.js)文件适用于获得请求验证码信息时的fp参数，好像用处不是太大。
- [chrome_test.py](chrome_test.py)该文件是使用chromedriver进行滑块破解的，比较无脑（实测可以一滑到底），只是用于破解时方便自动化调试的
- [yidun.py](yidun.py)该文件是通过破解js提交请求进行破解的，是重头戏
# 注意事项
- http://c.dun.163yun.com/api/v2/get 该地址请求时需要加请求头，否则通过率极低（坑逼问题搞了我一天，太菜了）
# 参考链接
- [验证码缺口识别和轨迹生成](https://www.jianshu.com/p/f12679a63b8d)
- [冷月大佬博客](https://lengyue.me/index.php/category/captcha/crack-yidun/)
- [浏览器指纹（window.gdxidpyhxde）](https://blog.csdn.net/wu0che28/article/details/103050970)