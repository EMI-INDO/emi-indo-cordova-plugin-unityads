var exec = require('cordova/exec');

exports.unityInitialize = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'unityInitialize', [arg0]);
};

exports.showBanner = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showBanner', [arg0]);
};

exports.hideBanner = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'hideBanner', [arg0]);
};

exports.showInterstitial = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showInterstitial', [arg0]);
};

exports.showVideo = function (arg0, success, error) {
    exec(success, error, 'emiUnityAdsPlugin', 'showVideo', [arg0]);
};
