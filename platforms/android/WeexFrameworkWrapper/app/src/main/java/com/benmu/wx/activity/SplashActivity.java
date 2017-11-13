package com.benmu.wx.activity;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;

import com.benmu.framework.BMWXEnvironment;
import com.benmu.framework.constant.Constant;
import com.benmu.framework.constant.WXConstant;
import com.benmu.framework.manager.ManagerFactory;
import com.benmu.framework.manager.impl.ParseManager;
import com.benmu.framework.manager.impl.VersionManager;
import com.benmu.framework.manager.impl.dispatcher.DispatchEventManager;
import com.benmu.framework.model.RouterModel;
import com.benmu.framework.model.TitleModel;
import com.benmu.framework.model.WeexEventBean;
import com.benmu.wx.R;

/**
 * Created by Carry on 2017/8/23.
 */

public class SplashActivity extends Activity {
    private Handler mHandler = new Handler();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        init();
    }

    private void init() {
        final VersionManager versionManager = ManagerFactory.getManagerService(VersionManager
                .class);
        new Thread(new Runnable() {
            @Override
            public void run() {
                long prepareTime = versionManager.prepareJsBundle(SplashActivity.this);
                mHandler.postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        toHome();
                    }
                }, 2000 - prepareTime);
            }
        }).start();


    }

    private void toHome() {
        String homePage = BMWXEnvironment.mPlatformConfig.getPage().getHomePage();
        String NavigationColor = BMWXEnvironment.mPlatformConfig.getPage().getNavBarColor();
        RouterModel router = new RouterModel(homePage, Constant.ACTIVITIES_ANIMATION
                .ANIMATION_PUSH, null, null, false, null);
        DispatchEventManager dispatchEventManager = ManagerFactory.getManagerService
                (DispatchEventManager.class);
        WeexEventBean eventBean = new WeexEventBean();
        eventBean.setKey(WXConstant.WXEventCenter.EVENT_OPEN);
        eventBean.setJsParams(ManagerFactory.getManagerService(ParseManager.class).toJsonString
                (router));
        eventBean.setContext(this);
        dispatchEventManager.getBus().post(eventBean);
        finish();
    }
}
