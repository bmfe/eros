package com.benmu.wx.activity;

import android.app.Activity;
import android.os.Bundle;
import android.os.Handler;

import com.benmu.framework.BMWXEnvironment;
import com.benmu.framework.constant.Constant;
import com.benmu.framework.constant.WXEventCenter;
import com.benmu.framework.manager.ManagerFactory;
import com.benmu.framework.manager.impl.ParseManager;
import com.benmu.framework.manager.impl.VersionManager;
import com.benmu.framework.manager.impl.dispatcher.DispatchEventManager;
import com.benmu.framework.model.RouterModel;
import com.benmu.framework.model.WeexEventBean;
import com.benmu.framework.proxy.SplashActivityProxy;
import com.benmu.wx.R;

/**
 * Created by Carry on 2017/8/23.
 */

public class SplashActivity extends Activity {
    private SplashActivityProxy activityProxy;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        activityProxy = new SplashActivityProxy();
        activityProxy.onCreateInit(this);
    }

    @Override
    protected void onStart() {
        super.onStart();
        activityProxy.onStart(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        activityProxy.onResume(this);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        activityProxy.onRestart(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        activityProxy.onPause(this);
    }

    @Override
    protected void onStop() {
        super.onStop();
        activityProxy.onStop(this);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        activityProxy.onDestroy(this);
    }
}
