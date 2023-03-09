---
title: Run the App
description: ""
position: 15
category: Setup
---

### Development mode

To run the app in development mode with hot module replacement (HMR) activated

```sh
pnpm run start
```

This command will start the app on port 8100 and host 0.0.0.0 so you can easily access from other devices on your wifi network

### Production mode

```sh
pnpm run start:prod
```

Same as above but with production bundle and no HMR

### iOS

```sh
pnpm run serve:ios
```

Same as development mode but will also open the IDE so you can execute the app in device. Make sure to have [set up the iOS environment](/guides/build-ios).

### Android

```sh
pnpm run serve:android
```

Same as development mode but will also open the IDE so you can execute the app in device. Make sure to have [set up the Android environment](/guides/build-android).

### Device testing with Firebase Emulators

To connect the app with emulators running on your machine, you need to make some changes in order to get everything listening on the same network.

1 - change `the firebase.json` emulators section to include your host. The ip address here is the one which identifies your machine in your local network and you can get it by looking into your system settings.

```json
  //...
  "emulators": {
    "functions": {
      "port": 5001,
      "host": "192.168.18.22"
    },
    "firestore": {
      "port": 8080,
      "host": "192.168.18.22"
    },
    "storage": {
      "port": 9199,
      "host": "192.168.18.22"
    },
    "ui": {
      "enabled": true
    },
    "auth": {
      "port": 9099,
      "host": "192.168.18.22"
    }
  }
```

2 - change the `seed` script in `package.json` replacing `localhost` to your local ip address as defined in host above.

```json
//...
"seed": "FIRESTORE_EMULATOR_HOST=192.168.18.22:8080 FIREBASE_AUTH_EMULATOR_HOST=192.168.18.22:9099 npm run seed:users && FIRESTORE_EMULATOR_HOST=192.168.18.22:8080 FIREBASE_AUTH_EMULATOR_HOST=192.168.18.22:9099 npm run seed:groups && FIRESTORE_EMULATOR_HOST=192.168.18.22:8080 FIREBASE_AUTH_EMULATOR_HOST=192.168.18.22:9099 npm run seed:messages 30",
//...
```

3 - change angular's `environment.ts` to include the `serverIP` defined above as host.

```ts
export const environment = {
  // ...
  serverIP: "192.168.18.22",
};
```

And that's it. Now you should be able to run the app in your device but connected to the emulators for auth, firestore and storage.
