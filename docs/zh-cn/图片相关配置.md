# 图片配置

此部分教程主要说明如何修改 App logo、启动图（Launchimage）、以及工程中一些用到的默认图片；

### 首先打开 iOS 工程

cd 到 ios/WeexEros 目录下，执行命令：`$ open WeexEros.xcworkspace open` 然后会调用 Xcode 打开工程，或者到目录下直接双击 `WeexEros.xcworkspace`

#### 找到 Assets.xcassets 文件

工程配置的图片都在 Assets.xcassets 中，打开后是下面这个样子

![](https://img.benmu-health.com/gitbook/weexErosimg.png)

#### 说明

> 1x 图片是给非Retina屏用的，iPhone 4 之前的机型，iPhone3GS 这部分机型直接无视，所以不需要设置图片
>
> 2x 图片是给 Retina 屏用的，iPhone 4（含）之后的机型
>
> 3x 图是专为 5.5 寸机型提供的，但不是必须的，如果 3x图没有系统会使用 2x 的图片

```
|- AppIcon                // logo 图片
|- LaunchImage            // 启动页图片
|- Navbar
    |- NavBar_BackIcon        // 导航栏默认的返回按钮图片
    |- NavBar_BackItemIcon    // 自定义的返回按钮图片
|- Other
    |- image_placeholder      // <image>标签 站位图片,图片加载失败会显示这个站位图
|- pullLoadding           // 下拉刷新动画
|- Scan
    |- Scan_line              // 扫一扫的线
    |- Scan_pick_bg           // 扫一扫中的框
```

#### 替换方法

> 以上图片都可以替换为自己的，考虑到一些开发人员没有 iOS 开发经验，以免出错，请按以下教程来操作

以 AppIcon为例

![](https://img.benmu-health.com/gitbook/appicon.png)

选中 AppIcon 右键 -&gt; Show in Finder

![](https://img.benmu-health.com/gitbook/appicon1.png)

打开 AppIcon.appiconset 文件夹

![](https://img.benmu-health.com/gitbook/AppIcon2.png)

注意图片尺寸，还有命名规范要与之前的保持一致，然后将新的图片直接覆盖就可以了；

其他图片的替换方式一样；

