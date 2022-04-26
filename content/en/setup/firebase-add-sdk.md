---
title: Add Firebase SDK
description: ""
position: 11
category: Setup
---

Now it's time to add the publishable firebase config to the app

### Copy the template file

From your app root execute this bash command to create a new file which will hold your firebase public credentials.

```sh
cp src/app/config/firebase.blank.txt src/app/config/firebase.ts
```

### Grab your config

From Firebase menu, click the cog button located right after _Project Overview_ and then access _Project Settings_

![firebase project settings](/images/docs/firebase-project-settings.png)

### Register app

Then register a new web app platform (the `< / >` icon)

![firebase app register](/images/docs/firebase-app-register.png)

You'll be prompted to enter an app nickname. _Firebase Hosting_ option is not required, make sure it's unchecked.

![firebase app register](/images/docs/firebase-add-sdk.png)

### Edit with your credentials

Open the newly created file and paste the whole config object acquired in the earlier step

```ts title="/src/app/config/firebase.ts"
export const FIREBASE_CONFIG: any = {
  apiKey: "AIzaSyBZVzIk-laa7xO2HFKJZD4mTV38UZYiI",
  authDomain: "my-app-d7bac.firebaseapp.com",
  projectId: "my-app-d7bac",
  storageBucket: "my-app-d7bac.appspot.com",
  messagingSenderId: "3504521598782",
  appId: "1:3503157598782:web:84ab2f2786a26c3e14ca526f",
};
```

> Make sure to not replace the FIREBASE_CONFIG constant. Only add the object content. Final result should look like as the code snippet above.
