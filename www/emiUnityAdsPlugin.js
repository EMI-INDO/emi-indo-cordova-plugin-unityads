var exec = require('cordova/exec');

exports.unitySdkInitialize = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'unitySdkInitialize', [arg0]);
};

exports.showBannerAd = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showBannerAd', [arg0]);
};

exports.hideBannerAd = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'hideBannerAd', [arg0]);
};

exports.showInterstitialAd = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showInterstitialAd', [arg0]);
};

exports.showVideoAd = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showVideoAd', [arg0]);
};
