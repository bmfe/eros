//
//  AppDelegate.m
//  WeexEros
//
//  Created by XHY on 2017/8/7.
//  Copyright © 2017年 benmu. All rights reserved.
//

#import "AppDelegate.h"

#import <BMBaseLibrary/BMConfigManager.h>
#import <BMBaseLibrary/BMMediatorManager.h>
#import <BMBaseLibrary/BMPushMessageManager.h>

#import <GTSDK/GeTuiSdk.h>
#import <WXApi.h>

#import <BMBaseLibrary/BMRouterManager.h>
#import <BMBaseLibrary/WeexMarketPlugins.h>
#import <BMBaseLibrary/BMBaseViewController.h>
#import <BMBaseLibrary/BMNavigationController.h>
#import <BMBaseLibrary/BMAppResource.h>
#import <BMBaseLibrary/BMDefine.h>
#import <BMBaseLibrary/HYGuideView.h>

@interface AppDelegate ()
{
    BOOL _isLoad;
}
@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    
    /** 点击推送消息唤起app时调用方法 */
    if (TK_PlatformInfo().getui.enabled) {
        NSDictionary *notificationPayload = launchOptions[UIApplicationLaunchOptionsRemoteNotificationKey];
        if (notificationPayload) {
            [BMPushMessageManager addPushNotification:notificationPayload];
        }
    }
    
    if (_isLoad == NO) {
        _isLoad = YES;
        
        [self startApp];
    }
    
    /** 注册通知 当js更新文件准备就绪用户点击立即升级会触发这个方法 重新加载最新js资源文件 */
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(startApp) name:K_BMAppReStartNotification object:nil];
    
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
    if (TK_PlatformInfo().getui.enabled)
        [[BMPushMessageManager shareInstance] setIsLaunchedByNotification:YES];
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    if (TK_PlatformInfo().getui.enabled)
        [[BMPushMessageManager shareInstance] setIsLaunchedByNotification:NO];
    
    [[UIApplication sharedApplication] cancelAllLocalNotifications];
    [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
    if (_isLoad == NO) {
        _isLoad = YES;
        
        [self startApp];
    }
    
    return [BMRouterManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
    /* 获取到deviceToken */
    if (TK_PlatformInfo().getui.enabled)
        [BMPushMessageManager registerForRemoteNotificationsWithDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
    /* 注册推送失败 */
    WXLogInfo(@"%@",[error localizedDescription]);
}

- (void)application:(UIApplication *)application performFetchWithCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
    if (TK_PlatformInfo().getui.enabled)
        [BMPushMessageManager performFetchWithCompletionHandler:completionHandler];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
    
    /* 收到push消息 */
    if (TK_PlatformInfo().getui.enabled)
        [BMPushMessageManager receiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}

-(void)startApp
{
    /* 初始化数据 */
    [BMConfigManager configDefaultData];
    
    /* 初始化push服务 */
    if (TK_PlatformInfo().getui.enabled)
        [BMPushMessageManager configPushService];
    
    /** 加载页面 */
    [[BMMediatorManager shareInstance] loadViewControllerWithWindow:_window];
    
}


@end
