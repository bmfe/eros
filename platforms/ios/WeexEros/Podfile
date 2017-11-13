source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '8.0'
#忽略引入库的警告
inhibit_all_warnings!

def common
    pod 'WeexSDK', :path=>'./WeexiOSSDK/'
    pod 'WXDevtool', '0.15.1', :configurations => ['Debug']
    pod 'SDWebImage', '3.7.5'
    pod 'SocketRocket', '0.4.2'
    pod 'ATSDK-Weex', '0.0.1'
    pod 'YTKNetwork', '2.0.3'
    pod 'SSZipArchive', '1.6.2'
    pod 'YYModel', '1.0.4'
    pod 'Masonry', '1.0.2'
    pod 'SVProgressHUD', '2.1.2'
    pod 'UMengUShare/Social/WeChat', '6.3.0'
    pod 'GTSDK', '1.6.2.0-noidfa'
    pod 'UMengAnalytics-NO-IDFA', '4.2.5'
    pod 'TZImagePickerController', '1.7.8'
    pod 'FDFullscreenPopGesture', '1.1'
    pod 'BMBaseLibrary', :path=>'./Benmu-iOS-Library', :subspecs=>[
        'BMDevice',
        'BMExtension',
        'BMWeexExtension',
        'BMDebug',
        'BMComponent',
        'BMController',
        'BMNetwork',
        'BMModule',
        'ErosApp',
        'BMManager',
        'BMHandler',
        'BMCustomUI',
        'BMModel',
        'WeexPlugins',
        'BMTransition',
    ]
#    pod 'Bugtags'
    pod 'MJRefresh', '3.1.12'
   end

target 'WeexEros' do
    common
end
