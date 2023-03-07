---
title: Firebase Emulators
description: ""
position: 10
category: Setup
---

The Firebase Emulators are a suite of tools that emulate the Firebase services on your local machine. This allows you to test your app without having to deploy it to Firebase.

<alert>
You can skip this step if you don't want to use emulators. By default the app uses production data, but we recommend it for development once your app is ready for production so you can test changes not having to worry about breaking anything.
</alert>

## Start the emulators

First cd to the `functions` folder where we have a `package.json` file containing only deps for our infrastructure code. Then issue `pnpm install`.

Once the [firebase cli](/setup/firebase-install-cli) is installed, you can initialize emulators by running the following command:

```sh
cd ./chatness-app/functions
```

```sh
firebase init emulators
```

The init command will ask you to select the emulators you want to use, when asked to download hit `yes` and then it will update the `firebase.json` file in the Chatness root folder. The `firebase.json` should contain configuration details for the emulators.

After emulators are initiated, run the following command to start them all at once:

```sh
cd ./chatness-app/functions
```

```sh
pnpm start
```

## Seeding data to Firestore and Auth emulators

Make sure to prepend these globals to the seed commands so Firebase SDK knows where to connect to.

```sh
FIRESTORE_EMULATOR_HOST="localhost:8080" \
FIREBASE_AUTH_EMULATOR_HOST="localhost:9099" \
FIREBASE_STORAGE_EMULATOR_HOST="localhost:9199"
```

Replace those values with the ones you see in the terminal when you start the emulators. Storage here is not used for now, but it's set just for convenience.

example

```sh
cd ./chatness-app
```

```sh
FIRESTORE_EMULATOR_HOST="localhost:8080" \
FIREBASE_AUTH_EMULATOR_HOST="localhost:9099" \
FIREBASE_STORAGE_EMULATOR_HOST="localhost:9199" \
pnpm run seed:users
```

The above command will create users with authentication and seed the `User` collection in the emulated firestore. Note that data is erased when you stop the emulators, so you will need to seed data again if you want to test something else.

## Run the app locally with emulators

To run the app locally using data from emulators, open the env file at `chatness-app/src/environments/environment.ts` and change the prop `emulator` to `true`.

```ts
export const environment = {
  production: false,
  emulator: true,
};
```

by default the app uses production data, so the emulator option is set to `false`.
