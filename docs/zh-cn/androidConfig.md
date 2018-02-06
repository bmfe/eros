# App名称、版本号设置
* 应用名称设置 

1.打开app/src/main/res/values/strings.xml,找到app_name节点。 
如图![](https://img.benmu-health.com/gitbook/1505443821697.jpg)
2.修改app_name节点的值为你的应用名字即可。

* 应用版本设置 

1.打开app/build.gradle，找到versionName。
如图![](https://img.benmu-health.com/gitbook/1505457425584.jpg) 

2.将versionName所对应的版本号修改成你的版本 重新运行即可

# App 图标替换

项目的 /platforms/android/WeexFrameworkWrapper/app/src/main/res 目录下 有 mipmap 
如下图![](https://github.com/myliuyx/source/blob/master/8011AB9FE2D34C066BA1D4C29652CCD3.jpg)

请分别 替换掉 mipmap-hdpi 到mipmap-xxxhdpi 里面的 ic_launcher.png 图片为您app 图标文件。保持命名一样即可。

> mipmap-hdpi 到 mipmap-xxxhdpi 分别对应的是安卓手机的分辨率 分别从低分辨率到高分辨率不同的图片尺寸。 
  您的图标尺寸可以直接参考 目录里已有的图标尺寸


