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

#import <WXApi.h>

#import <BMBaseLibrary/BMRouterManager.h>
#import <BMBaseLibrary/BMDefine.h>

#ifdef BM_PUSH
#import <ErosPluginGeTui/BMPushMessageManager.h>
#endif

@interface AppDelegate ()
{
    BOOL _isLoad;
}
@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    
    /** 点击推送消息唤起app时调用方法 */
#ifdef BM_PUSH
    NSDictionary *notificationPayload = launchOptions[UIApplicationLaunchOptionsRemoteNotificationKey];
    if (notificationPayload) {
        [BMPushMessageManager addPushNotification:notificationPayload];
    }
#endif
    
    if (_isLoad == NO) {
        _isLoad = YES;
        
        [self startApp];
    }
    
    /** 注册通知 当js更新文件准备就绪用户点击立即升级会触发这个方法 重新加载最新js资源文件 */
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(startApp) name:K_BMAppReStartNotification object:nil];
    
    return YES;
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
    [[UIApplication sharedApplication] cancelAllLocalNotifications];
    [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
}


- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
    if (_isLoad == NO) {
        [self startApp];
    }
#ifdef BM_PUSH
    [[BMPushMessageManager shareInstance] setIsLaunchedByNotification:NO];
#endif
    return [BMRouterManager application:application openURL:url sourceApplication:sourceApplication annotation:annotation];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
#ifdef BM_PUSH
    /* 获取到deviceToken */
    [BMPushMessageManager registerForRemoteNotificationsWithDeviceToken:deviceToken];
#endif
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
    /* 注册推送失败 */
    WXLogInfo(@"%@",[error localizedDescription]);
}

- (void)application:(UIApplication *)application performFetchWithCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
#ifdef BM_PUSH
    [BMPushMessageManager performFetchWithCompletionHandler:completionHandler];
#endif
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
    
#ifdef BM_PUSH
    /* 收到push消息 */
    [BMPushMessageManager receiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
#endif
}

-(void)startApp
{
    _isLoad = YES;
    
    /* 初始化数据 */
    [BMConfigManager configDefaultData];
    
    /** 加载页面 */
    [[BMMediatorManager shareInstance] loadViewControllerWithWindow:self.window];
    
}

@end
