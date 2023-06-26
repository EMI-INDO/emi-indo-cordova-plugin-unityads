var exec = require('cordova/exec');

exports.unitySdkInitialize = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'unitySdkInitialize', [arg0]);
};

exports.debugLoadAdError = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'debugLoadAdError', [arg0]);
};

exports.setPrivacyAndConsent = function (arg0, arg1, arg2, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'setPrivacyAndConsent', [arg0, arg1, arg2]);
};

exports.loadBannerAd = function (arg0, arg1, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'loadBannerAd', [arg0, arg1]);
};

exports.showBannerAd = function (success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showBannerAd', []);
};

exports.hideBannerAd = function (success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'hideBannerAd', []);
};

exports.loadInterstitialAd = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'loadInterstitialAd', [arg0]);
};

exports.showInterstitialAd = function (success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showInterstitialAd', []);
};

exports.loadVideoAd = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'loadVideoAd', [arg0]);
};

exports.showVideoAd = function (success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showVideoAd', []);
};