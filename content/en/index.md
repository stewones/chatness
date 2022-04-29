---
title: Introduction
description: ""
position: 1
category: ""
stack:
  - Angular 13+
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

The Chatness app folder structure is basically composed of

```
.
├── \elements
├── \functions
├── \resources
├── \seeds
├── \src
│ ├── \app
│ │ ├── \actions
│ │ ├── \components
│ │ ├── \config
│ │ ├── \effects
│ │ ├── \guards
│ │ ├── \interfaces
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

### Elements

Decoupled environment for building web components. In case you need to modify or add a new element based on Chatness you can edit the `elements.modules.ts` which lives inside this folder and then issue `npm run build:elements`

### Functions

Dedicated environment for server side stuff like the push notification trigger.

### Resources

Icon and splash files you can use as example to edit your own before deploying the app to device.

### Seeds

Where lives all the related code to pre populate database. This way you can test and extract the maximum of Chatness right on the beginning.

### Actions

Actions are the way app communicates with the global state. It carries a payload of information and can execute side effects as adding something to cache.

```ts title="/src/app/actions/uiSetDisplay.ts"
import { setCache } from "@rebased/cache";

export function uiSetDisplay(mode: "light" | "dark") {
  return function (dispatch) {
    setCache("uiDisplay", mode);
    dispatch({
      type: "setDisplay",
      payload: mode,
    });
  };
}
```

### Components

Place where every reusable/exportable components lives in. If you aren't an angular developer run a simple command and they're all exported as custom elements to be used as web components.

### Config

General app configurations

### Effects

App specific side effects

### Guards

Route guards from angular

### Interfaces

App specific interfaces

### Pages

App specific pages

### Reducers

App specific reducers

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
