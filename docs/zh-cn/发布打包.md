## 基于AndroidStudio打包
本节介绍一下基于IDE AndroidStudio的不同构建方式和多渠道打包
***
### 两种构建方式打包
构建方式大体分种Debug和Release，Debug一般是用于开发调试的包，eros在debug模式中将保留调试按钮，你可以自由切换资源加载方式。Release是用于对外发布的包，eros在release模式中将隐藏调试按钮，且js资源默认从本地assets中加载。下面简单介绍下发布不同构建方式操作过程。
### Debug&Release
1. 选择As菜单栏中build选项，然后选择 Generate Signed APK
     ![](https://github.com/aa453509345/eros/blob/master/build.jpg)
2. 在点击next
     ![](https://github.com/aa453509345/eros/blob/master/step1.jpg)
3. 这一步主要是选择签名信息，ErosDemo中自带了一个测试的签名，你的项目在发布时需要自行创建新的签名文件，签名文件是应用的唯一标示，对于你的应用非常重要。稍后介绍签名文件的生成。
     ![](https://github.com/aa453509345/eros/blob/master/step2.jpg)
4. 选择构建方式和渠道名。构建方式即debug和release，渠道名主要作用是区分不同渠道，这对应用的统计等等非常重要。ErosDemo给出了一个例子渠道，更多自定义渠道请到`platforms/android/WeexFrameworkWrapper/app/build.gradle`中`productFlavors`节点自行添加，更多关于gradle操作请自行google。
![](https://github.com/aa453509345/eros/blob/master/step3.jpg)
5. 点击finish开始打包
### 签名文件的生成
1. 在上节打包流程中，第二步操作选择create new开始生成签名文件
   ![](https://github.com/aa453509345/eros/blob/master/create_1.jpg)
2. 在弹窗中填写相关信息
   ![](https://github.com/aa453509345/eros/blob/master/create_2.jpg)
   主要注意的是签名密码和签名昵称的密码 这个非常重要之后很多操作会用到  一定记到小本本上 
3.点击OK，生成签名文件。签名文件要妥善保管，一旦丢失，泄漏对于之后的发布会造成一些麻烦

### Tips：本节简单介绍了签名的生成和打包，上述过程中如果你遇到了麻烦，请issues或者google，让更多的开发者帮助你