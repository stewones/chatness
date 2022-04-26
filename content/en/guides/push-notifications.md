---
title: Push Notifications
description: ""
position: 18
category: Guides
---

## iOS

Follow these steps to configure Chatness push notifications for iOS. Make sure to have followed these [iOS build](/guides/build-ios) instructions and the app is running with `npm run serve:ios`

Before starting issue an `npm install` to keep dependencies aligned and up to date. Especially if you're upgrading Chatness from a previous version.

Keep in mind that you'll need an active Apple Membership to configure push notifications.

### App ID

The first thing we need to do is creating an app id on Apple Developer site. This app id must be unique and will be used by the final bundle and App Store to identify your application.

1. Go to [developer.apple.com](https://developer.apple.com/)
2. Access your account
3. Navigate to [Certificates, IDs & Profiles](https://developer.apple.com/account/resources/certificates/list)
4. From the left menu, go to _Identifiers_
5. Click the plus (+) button
6. Choose _App IDs_ and continue
7. Select _App_
8. Enter a description and the bundle ID which must be unique (eg: com.my.chat.app)
9. Select _Push Notifications_ in the list
10. Continue and register

### Create a Certificate Signing Request

![Create a Certificate Signing Request - CSR](/images/docs/create-csr.png)

1. Launch Keychain Access located in _/Applications/Utilities_
2. Choose Keychain Access > Certificate Assistant > Request a Certificate from a Certificate Authority
3. In the Certificate Assistant dialog, enter an email address in the User Email Address field
4. In the Common Name field, enter a name for the key (for example, Gita Kumar Dev Key)
5. Leave the CA Email Address field empty
6. Choose "Saved to disk" and click Continue

### Create a new Apple Certificate

1. navigate to [Certificates, IDs & Profiles](https://developer.apple.com/account/resources/certificates/list)
2. click the plus (+) button
3. choose _iOS App Development_
4. upload the _Certificate Signing Request_ acquired earlier
5. continue and download the certificate (ios_development.cer)

### Generate .p8 key file

To generate a .p8 key file, go to [Apple developer account](https://developer.apple.com/account) page, then select _Certificates, IDs & Profiles_

![p8 select certificates, ids and profiles](/images/docs/p8-overview.png)

Next, select _Keys_

![p8 select keys](/images/docs/p8-keys.png)

Click the "+" button to add a new key

![p8 add new key](/images/docs/p8-add.png)

In the new key page, type in a key name and check the _Apple Push Notification service (APNs)_ box, then click "Continue" and "Register"

![p8 register](/images/docs/p8-register.png)

Then proceed to download the key file by clicking _Download_

![p8 download](/images/docs/p8-download.png)

The Auth Key filename will look like this: _AuthKeyABCD1234.p8_ , the _ABCD1234_ is the Key ID for this key, we will need this Key ID later.

That’s for generating the .p8 key file! Remember to keep the key file safely as you can only download it once, if you lost the key file, you will need to revoke and it and register a new one.

### Create a Firebase iOS App

Now that we have the .p8 push notification key, let’s head to Firebase to configure the APN (Apple Push Notification) service with the key file.

Go to your project settings
![firebase project settings](/images/docs/firebase-project-settings.png)

Add a new app (iOS icon)
![firebase ios app](/images/docs/firebase-add-ios-app.png)

Fill in the iOS bundle ID you created at the [very first step](/guides/push-notifications#app-id)
![firebase ios bundle id](/images/docs/firebase-add-bundle-id.png)

Download the `GoogleService-Info.plist` and skip the rest

### Add .p8 key to Firebase

Go to _Project Settings_ at Firebase and then inside _Cloud Messaging_ tab, upload the p8 key file to the Firebase iOS app (APNs Authentication Key) with the key ID acquired earlier on the [p8 key generation step](/guides/push-notifications#generating-p8-key-file) and the account team ID from your Apple Developer account.

![firebase p8 upload](/images/docs/firebase-p8-upload.png)

### Edit Capacitor config

Now it's time to add your bundle ID to Capacitor and then issue `npm run serve:ios`

![capacitor config bundle](/images/docs/capacitor-config-bundle.png)

### Add Google Service

To include the `GoogleService-Info.plist` acquired earlier in the native project, open Xcode with `npm run serve:ios` and right-click on the yellow folder named "App" and then select the option "Add files to App".

![xcode add files](/images/docs/xcode-add-files.png)

### Test iOS notification

Now you can deploy the app to device (Xcode's play button). Once it's running you will be subscribed to a `test` topic. Head to _Firebase Console > Cloud Messaging_ option from menu and click on "Send your first message". Enter a notification title and text, click next and then under "Target" select the option "Topic", next, next, review and publish. If you have followed correctly all the steps above you should receive this notification on your device.

![firebase notification test](/images/docs/firebase-notification-test.png)

## Android

Follow these steps to configure Chatness push notifications for Android. Make sure to have followed these [Android build](/guides/build-android) instructions and the app is running with `npm run serve:android`

Before starting issue an `npm install` to keep dependencies aligned and up to date. Especially if you're upgrading Chatness from a previous version.

### Create a Firebase Android App

Go to your project settings
![firebase project settings](/images/docs/firebase-project-settings.png)

Add a new app (Android icon)
![firebase android app](/images/docs/firebase-add-ios-app.png)

Fill in the Android package name. It can be the same as iOS bundle id, then register the app and download the `google-service.json` file

### Add Google Services to the native project

To include `google-service.json` acquired earlier in the native project, open Android Studio with `npm run serve:android` and then drag and drop the file under the folder named "app".

### Import FCM Plugin

For Capacitor apps < 3.0 we need to tell it to initialise the plugin

1. Open the file `MainActivity.java`. It's located at `app/java/[your.package.name]/MainActivity`
2. add `import com.getcapacitor.community.fcm.FCMPlugin;` on top
3. add `add(FCMPlugin.class);` inside the init callback

It should look like

```java
//...
import com.getcapacitor.community.fcm.FCMPlugin;

// ...
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    add(FCMPlugin.class);
}});

```

### Test Android notification

Now you can deploy the app to device (Studio's play button). Once it's running you will be subscribed to a `test` topic. Head to _Firebase Console > Cloud Messaging_ option from menu and click on "Send your first message". Enter a notification title and text, click next and then under "Target" select the option "Topic", next, next, review and publish. If you have followed correctly all the steps above you should receive this notification on your device.

![firebase notification test](/images/docs/firebase-notification-test.png)

## Chat notifications

To get notifications for chat, 1x1 or groups, you should also deploy the message trigger to Firebase Functions.

From your app root, issue `npm run functions:deploy` and you should be all set. To start receiving notifications from a group you'll need to have visited that group before.

> Push notifications are proudly powered by the [Capacitor FCM community plugin](https://github.com/capacitor-community/fcm). Please make sure to leave a star on Github ⭐
