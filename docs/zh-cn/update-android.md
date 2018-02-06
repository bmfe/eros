# 2.1.1
1. 修复未获得权限时多次点击图片可能出现返回多张图片问题。
2. 添加权限申请。
3. 将调试修改成扫一扫，并升级weex debug.
4. 修复一些已知bug
5. bmchart支持传递方法

# 2.1.0
1. 拓展weex.config.eros变量
2. 修复ToolsMoudle 是否安装微信方法
3. 修复iconfont不显示问题。
4. 修改富文本默认字体
5. 修复一些已知bug
6. 修复bmCalendar样式不生效问题
7. 修复滑动事件影响bmRefresh消失问题

# 2.0.9
1. 动态修改activity category  无需在启动activity时进行选择
2. 修复debug invalidate instance报错
3. 集成weex性能分析（摇一摇开启）
4. 修改setHomePage 返回无效问题
5. 修改上传图片返回字符串改为对象


# 2.0.8
1. 修复axios bug
2. 修复setHomePage方法没有立即生效问题。
3. 修复sms 发短信崩溃问题。
4. 修复调试按钮点击崩溃问题。
5. 修复call方法总是110问题。
6. 修复预览本地图片问题。
7. 修改返回格式status问题

# 2.0.7
1. 添加一键调试，不需要扫一扫即可调用调试，模拟器现在也可以调试了；需要在 `eros.native.js` 中添加 `debugServer`，添加方式请看[eros.native.js 配置教程](https://github.com/bmfe/eros-template/wiki/%E9%85%8D%E7%BD%AE%E7%9B%B8%E5%85%B3);
2. 新增[bmImage](https://github.com/bmfe/eros-template/wiki/bmImage) Module，将图片相关方法统一放到此Module中，bmCamera及bmBrowserImg Module已经废弃，后续版本中移除；
3. [bmAxios](https://github.com/bmfe/eros-template/wiki/bmAxios) Module 新增 uploadImage 方法，用于上传本地图片；
4. 扫一扫功能移植到了[bmTool](https://github.com/bmfe/eros-template/wiki/bmTool) Module 中；
5. 预览图片 preview 方法支持浏览本地图片及 jsbundle 中的图片；
6. 优化加载中介者机制，当拦截器变化时重新加载，刷新页面的时候检查是否已经加载成功；
7. 新增bmWebsocket Module；
8. bmRouter Module 新增 setHomePage方法: 作用：重新设置app启动加载的首页，js传path过来，native端会将传过来的path存储到本地，app启动的时候优先读取这个参数来显示首页，没有的话读取 native.js 中的配置；
9. navigatorModule支持RGB设置字体颜色

# 2.0.6
1. 统一支持库的依赖版本
2. config.eros 中加入jsVersion deviceId navBarHeight 环境参数
3. bmRouter增加openBrowser方法以打开浏览器
4. 升级WeexSDK到0.17.0
5. eros.native.json加密
6. 上传图片module中传入url地址
7. axios 统一返回格式
8. bmStorage 去掉外面包装层
9. 打开通讯录选择联系人电话号码和打开短信发送信息
10. 所有除了崩溃的报错都弹窗提示
11. 双击调试按钮刷新
12. 解决手势冲突（sider 和 scroller相互嵌套）

# 2.0.5
1. 图片上传增加传递head 参数 默认为null
2. 修改loading 实现，并做了微小修改

# 2.0.4
1. 修改 EventFetch patch 方法
2. 修改 pages.zip 改成 bundle.zip

# 2.0.3
1. 增加第一个页面的 物理返回按钮监听抛出事件'homeBack'
2. 增加 finish 方法 给前端调用。
3. eros.native.json 增加配置 isListentHomeBack 等于1时 监听HomeBack

# 2.0.2
1. 修改 AbstractWeexActivity 基类，删除 基类里返回和销毁 时检查是否开启dialog代码。
2. 修改 bmRouter callPhone方法，增加 int型 nowCall参数，如果传递并且 等于1时 不弹出dialog 直接跳转拨打电话页面


# 2.0.1
1. 更新编译gradle版本
2. 打开jsbundle更新逻辑
3. 修复上传问题 上传图片可附带参数
4. 支持BMChart
5. 集成weex-amap
6. 增加bmAuth moudle 支持微信授权登陆

# 2.0.0
1. 目录调整
2. 集成了个推推送
3. 集成日历控件
5. iconfont加载逻辑优化
6. 集成bmGeo模块


