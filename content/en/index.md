---
title: Introduction
description: ""
position: 1
category: ""
stack:
  - Angular 15+
  - Ionic 6+
  - Capacitor 3+
  - Tailwind 3+
demo: https://demo.chatness.app/
---

Feature-complete chat app template built from ground up on top of Ionic, Angular, Capacitor and Firebase.

<video-reel></video-reel>

## Stack

<list :items="stack"></list>

## Features

Awesome features built for developers, backed by Firebase.

- ✨&nbsp;&nbsp; [Offline Support](/tour/offline-support)
- 🌙&nbsp;&nbsp; [Light and Dark UI](/tour/interface)
- 💬&nbsp;&nbsp; [Chat in Groups](/tour/chat-group)
- 🧑&nbsp;&nbsp; [Chat in Private](/tour/chat-private)
- 🔎&nbsp;&nbsp; [Chat Contacts with seach](/tour/contact-list)
- 📄&nbsp;&nbsp; [Chat Pagination](/tour/pagination)
- 📷&nbsp;&nbsp; [Take Photos](/tour/take-photos)
- 📱&nbsp;&nbsp; [Select Photos](/tour/select-photos)
- 📹&nbsp;&nbsp; [Add Videos](/tour/select-photos)
- 🗑️&nbsp;&nbsp; [Message Deletion](/tour/delete-messages)
- 🔔&nbsp;&nbsp; [App Notifications](/tour/push-notifications)

Not to mention App Settings, Authentication, and much more to come.
<br />
Check out [our roadmap](https://tiny.one/chatness-roadmap)

## Demo

- App Store 👉&nbsp;&nbsp; https://tiny.one/chatness-app-store
- Google Play 👉&nbsp;&nbsp; https://tiny.one/chatness-google-play
- Self Hosted 👉&nbsp;&nbsp; https://demo.chatness.app

<div style="max-width: 375px; margin: 0 auto">

<code-sandbox :src="demo"></code-sandbox>

</div>

## App Structure

The Chatness app folder structure is composed of

```
.
├── \functions
├── \resources
├── \scripts
├── \src
│ ├── \app
│ │ ├── \actions
│ │ ├── \api
│ │ ├── \components
│ │ ├── \config
│ │ ├── \effects
│ │ ├── \guards
│ │ ├── \types
│ │ ├── \pages
│ │ ├── \reducers
│ │ ├── app-routing.module.ts
│ │ ├── app-component.ts
│ │ ├── app.module.ts
│ │ ├── shell-routing.module.ts
│ │ ├── shell-component.ts
│ │ └── shell.module.ts
│ ├── \assets
│ │ ├── \fonts
│ │ └── \images
│ ├── \environments
│ │ ├── \environment.prod.ts
│ │ └── \environment.ts
│ └── \theme
└── package.json
```

### Functions

Dedicated environment for server side stuff like the push notification trigger.

### Resources

Icon and splash files you can use as example to edit your own before deploying the app to device.

### Scripts

Code to pre populate database. This way you can test and extract the maximum of Chatness right on the beginning. Also a good starting point if you plan to rewrite the `api` to use another backend.

### Actions

Actions are the way app communicates with the global state in a Redux style. For instance, instead of using the `@ngrx` library or pure Angular Services we use a simpler implementation of Redux using some helpers from `elegante`. It reduces complexity and makes the app more predictable for small projects and teams, while still providing the same benefits of Redux.

> To improve even more your dev experience, make sure to install the [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to see and track global state changes in real time.

```ts title="/src/app/actions/uiSetDisplay.ts"
import { LocalStorage } from "@elegante/sdk";

// example of an async action
export function uiSetDisplay(mode: "light" | "dark") {
  return async function (dispatch) {
    await LocalStorage.set("uiDisplay", mode);
    dispatch({
      type: "setDisplay",
      payload: mode,
    });
  };
}

// dispatching the action (elsewhere in the app)
import { dispatch } from "@elegante/browser";
dispatch(uiSetDisplay("dark"));

// example of a sync action
import { createAction } from "@elegante/browser";
export const sessionSet = createAction("sessionSet");

// dispatching the action (elsewhere in the app)
import { dispatch } from "@elegante/browser";
dispatch(sessionSet({ user: { name: "John" } }));
```

### Components

Reusable components that can be used in any page.

### Config

Shared configurations

### Effects

Shared side effects

### Guards

Route guards for Angular

### Types

Shared types

### Pages

Pages connected to the Angular Router

### Reducers

Global state reducers

### Assets

Fonts and images shipped within the app.

Available fonts

- New York
- SF Compact Rounded
- SF Compact Display
- SF Compact Text
- SF Mono
- SF Pro Display
- SF Pro Rounded
- SF Pro Text

Available images

- favicon.png
- 404.svg

### Theme

General styling stuff is built with css variables in mind. So if you need to change some primary color in the app/elements you just need to edit a variable located there.

Fonts are loaded from `fonts.scss` so pick one font and uncomment its line.

## Getting Started

Get Chatness up and running for development through these little steps

1. [Download](/setup/app-download)
2. [Install](/setup/install)
3. [Create Firebase project](/setup/firebase-create-project)
4. [Install Firebase CLI](/setup/firebase-install-cli)
5. [Link with Firestore](/setup/firebase-link-firestore)
6. [Add Firebase SDK to the app](/setup/firebase-add-sdk)
7. [Add Firebase service account](/setup/firebase-add-service-account)
8. [Seed database](/setup/database-seed)
9. [Run the app](/setup/app-run)
10. Enjoy 🥳

## Looking for v1?

The v1 version of Chatness is still available at [v1.chatness.app](https://v1.chatness.app)
