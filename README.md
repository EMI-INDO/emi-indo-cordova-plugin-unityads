# emi-indo-cordova-plugin-unityads
 Welcome to Cordova Plugin  Unity Ads
### Unity Ads SDK (Android: 4.5.0)



  > __Note__
> - ## It's Not a fork, it's purely rewritten, clean of 3rd party code.

 > __Note__
> - ### No Ad-Sharing
> - ### No Remote Control
> - ### I guarantee 100% revenue for you.
> - [Code source:](https://github.com/Unity-Technologies/unity-ads-android) - UnityAds:




https://user-images.githubusercontent.com/78555833/228381348-15b92a53-0e24-437d-a7a5-1266cc7d909b.mp4





 ## Features

- Banner Ads
- Interstitial Ads
- Video Ads

## Coming soon
- Set banner position
- Set banner size

## 💰Sponsor this project
  [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/emiindo)

## Installation

```sh
cordova plugin add emi-indo-cordova-plugin-unityads
```
### Or
```sh
cordova plugin add https://github.com/EMI-INDO/emi-indo-cordova-plugin-unityads
```
## Remove
```sh
cordova plugin rm emi-indo-cordova-plugin-unityads
```


## deviceready

[Example ](https://github.com/EMI-INDO/emi-indo-cordova-plugin-unityads/blob/main/example/index.html) - index.html:

```sh
// Initializing the SDK in Android
// This needs to be done only once, ideally at app launch.

/////////////////////   Initializing the SDK
cordova.plugins.emiUnityAdsPlugin.unitySdkInitialize(unityGameID);

var unityGameID = "5215769"
var bannerPlacementId = "Banner_Android"
var InterstitialPlacementId = "Interstitial"
var videoPlacementId = "Rewarded_Android"

////////////////////  Event Initializing the SDK

document.addEventListener('onInitializationComplete', () => {

alert("on Sdk Initialization Complete");

});

document.addEventListener('onInitializationFailed', () => {

alert("on Sdk Initialization Failed");

});


```
## Banner ads

```sh

// Load a Show cordova.plugins.emiUnityAdsPlugin.showBannerAd(bannerPlacementId);
// Hide cordova.plugins.emiUnityAdsPlugin.hideBannerAd();

```


## Interstitial ads

```sh

// Load a Show cordova.plugins.emiUnityAdsPlugin.showInterstitialAd(InterstitialPlacementId);


```

## Vide ads

```sh

// Load a Show cordova.plugins.emiUnityAdsPlugin.showVideoAd(videoPlacementId);

```


# Event | callback:
### event code

```sh
document.addEventListener('onBannerLoaded', () => {

alert("on Banner Loaded");

});

```

## ( Banner Ads )

### Event Show a load

- onBannerLoaded
- onBannerFailedToLoad
- onBannerClick
- onBannerLeftApplication




## ( Interstitial Ads )

### Event Load a Show

- onUnityAdsAdLoaded.Interstitial
- onUnityAdsFailedToLoad.Interstitial
- onUnityAdsShowFailure.Interstitial
- onUnityAdsShowStart.Interstitial
- onUnityAdsShowClick.Interstitial
- onUnityAdsShowComplete.Interstitial




## ( Video Ads )

### Event Load a Show


- onUnityAdsAdLoaded.video
- onUnityAdsFailedToLoad.video
- onUnityAdsShowFailure.video
- onUnityAdsShowStart.video
- onUnityAdsShowClick.video
- onUnityAdsShowComplete.video


### Platform Support
- Android

## 💰Sponsor this project
  [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/emiindo)   
  
  
  ## Earn more money, with other ad networks.
  - ### emi-indo-cordova-plugin-fan
  
  [Facebook Audience Network:](https://github.com/EMI-INDO/emi-indo-cordova-plugin-fan) - Ads:
  
   - ### emi-indo-cordova-plugin-admob
  
  [Admob:](https://github.com/EMI-INDO/emi-indo-cordova-plugin-admob) - Ads:
  
  
                             
