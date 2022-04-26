---
title: Run the App
description: ""
position: 14
category: Setup
---

### Development mode

To run the app in development mode with hot module replacement (HMR) activated

```sh
npm run start
```

This command will start the app on port 8100 and host 0.0.0.0 so you can easily access from other devices on your wifi network

### Production mode

```sh
npm run start:prod
```

Same as above but with production bundle and no HMR

### iOS

```sh
npm run serve:ios
```

Same as development mode but will also open the IDE so you can execute the app in device. Make sure to have [set up the iOS environment](/guides/build-ios).

### Android

```sh
npm run serve:android
```

Same as development mode but will also open the IDE so you can execute the app in device. Make sure to have [set up the Android environment](/guides/build-android).
