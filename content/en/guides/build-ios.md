---
title: Build iOS
description: ""
position: 15
category: Guides
---

We recommend the use of [CapacitorJS](https://capacitorjs.com/) for building cross-platform native runtime web apps.

Capacitor features a native iOS bridge that enables developers to communicate between JavaScript and Native Swift or Objective-C code.

Capacitor iOS apps are configured and managed through Xcode, with dependencies managed by CocoaPods.

### Getting Started

Building iOS apps requires some iOS development dependencies to be installed, including Xcode 11 and the Xcode command line tools.

### Creating iOS App

By default, an iOS project is already created for every Chatness project. If you are adding Capacitor from scratch to an existing
project, you can manually add the iOS project using:

```bash
npx cap add ios
npx cap sync
```

The `sync` command updates dependencies, and copies any web assets to your project. Always that you install a new Capacitor plugin you'll need to run this sync command.

```bash
npx cap copy
```

To copy web assets only, which is faster if you know you don't need to update native dependencies.

### Opening iOS Project

To open the project in Xcode, run:

```bash
npx cap open ios
```

### Running Your App

Once Xcode is open, just click the Play button to run your app on a Simulator or Device.

![iOS running your app](/images/docs/ios-running.png)

## Next steps

You are now ready to continue developing and building your app. Use the various APIs available, Capacitor or Cordova plugins, or custom native code to build out the rest of your app.

<alert>

Check for further information at [Capacitor docs for iOS](https://capacitorjs.com/docs/ios)

</alert>
