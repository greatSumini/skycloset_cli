package com.skycloset;

import android.app.Application;

import com.facebook.react.ReactApplication;
//import io.invertase.firebase.RNFirebasePackage;
//import io.invertase.firebase.admob.RNFirebaseAdMobPackage;
//import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage;
//import com.google.android.gms.ads.MobileAds;

import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
            //new RNFirebasePackage(),
            //new RNFirebaseAdMobPackage(),
            //new RNFirebaseAnalyticsPackage(),
            new AsyncStoragePackage(),
        new RNGestureHandlerPackage(),
        new RNFusedLocationPackage(),
        new LinearGradientPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    //MobileAds.initialize(this, "ca-app-pub-8116042692354073~6395712418");
    SoLoader.init(this, /* native exopackage */ false);
  }
}
