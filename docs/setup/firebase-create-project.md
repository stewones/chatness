---
id: firebase-create-project
title: Create Firebase Project
description: ''
hide_title: true
---

# Create Firebase Project

Navigate to <a href="https://firebase.google.com/" target="_blank">Firebase site</a> and once logged in create a new project

![create firebase project](/images/docs/firebase-create-project.png)

:::note
Google may ask to enable Analytics, this is not required by Chatness. You can disable this option as to make Analytics work you would need more than this simple opt-in. In the future if you need Analytics capabilities we recommend the use of [Firebase Analytics Plugin](https://github.com/capacitor-community/firebase-analytics)
:::

## Enable email provider

Once your new project is ready navigate to `Authentication` from menu and enable auth for Email/Password. For the very first access you may have to click on `Get Started` so you can see the screen as below.

![enable firebase email auth](/images/docs/firebase-enable-email-auth.png)

Once asked enable only the option `Allow users to sign up using their email address and password. Our SDKs also provide email address verification, password recovery, and email address change primitives.`

## Activate Firestore

Then navigate to `Cloud Firestore` from menu to create a new database and you should be set to continue the setup

![create firebase firestore](/images/docs/firebase-activate-firestore.png)

:::note
When asked you can start database in _production mode_ since we're going to modify these settings further up
:::
