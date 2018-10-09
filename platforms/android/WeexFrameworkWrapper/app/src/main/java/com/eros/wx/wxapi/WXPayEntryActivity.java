//package com.eros.wx.wxapi;
//
//
//import android.app.Activity;
//import android.content.Intent;
//import android.os.Bundle;
//
//import com.eros.erospluginwxpay.WXApiModule;
//import com.eros.erospluginwxpay.model.WeChatPayResultModel;
//import com.eros.framework.manager.ManagerFactory;
//import com.eros.framework.manager.impl.dispatcher.DispatchEventManager;
//import com.tencent.mm.opensdk.constants.ConstantsAPI;
//import com.tencent.mm.opensdk.modelbase.BaseReq;
//import com.tencent.mm.opensdk.modelbase.BaseResp;
//import com.tencent.mm.opensdk.openapi.IWXAPI;
//import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;
//
//public class WXPayEntryActivity extends Activity implements IWXAPIEventHandler {
//
//    private static final String TAG = "MicroMsg.SDKSample.WXPayEntryActivity";
//
//    private IWXAPI api;
//
//    @Override
//    public void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        api = WXApiModule.getInstans().getWXApi();
//        if (api != null) {
//            api.registerApp(WXApiModule.getInstans().getAppId());
//            api.handleIntent(getIntent(), this);
//        }
//    }
//
//    @Override
//    protected void onNewIntent(Intent intent) {
//        super.onNewIntent(intent);
//        setIntent(intent);
//        if (api != null) {
//            api.handleIntent(intent, this);
//        }
//    }
//
//    @Override
//    public void onReq(BaseReq req) {
//
//    }
//
//    /**
//     * int ERR_OK = 0; int ERR_COMM = -1; int ERR_USER_CANCEL = -2; int ERR_SENT_FAILED = -3; int
//     * ERR_AUTH_DENIED = -4; int ERR_UNSUPPORT = -5;
//     */
//    @Override
//    public void onResp(BaseResp resp) {
//        if (resp.getType() == ConstantsAPI.COMMAND_PAY_BY_WX) {
//            WeChatPayResultModel bean = new WeChatPayResultModel();
//            bean.msg = resp.errStr;
//            bean.resCode = resp.errCode;
//            bean.status = resp.errCode;
//            ManagerFactory.getManagerService(DispatchEventManager.class).getBus().post(bean);
//            finish();
//        }
//    }
//}
