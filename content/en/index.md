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

<p>

Chatness is a hybrid chat app template that can be used as a starting point for any chat or related app, available for web, Android and iOS. It's a fully functional chat app that can be used as is, or it can be customized to fit your needs.

</p>

<p>
   <a class="w-full" style="max-width: 272px;" href="https://www.producthunt.com/posts/chatness-v2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatness&#0045;v2" target="_blank">
    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=382330&theme=dark" alt="Chatness&#0032;v2 - A&#0032;Hybrid&#0032;Chat&#0032;App&#0032;Template&#0032;with&#0032;Versatile&#0032;Native&#0032;Features | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
  </a>
</p>

<video-reel></video-reel>

<p class="tiles flex flex-col space-y-1">
    <img src="https://cdn.inl.gg/images/chatness/firebase-version-tile.png" />    
    <img src="https://cdn.inl.gg/images/chatness/angular-version-tile.png"  />    
    <img src="https://cdn.inl.gg/images/chatness/ionic-version-tile.png"  />
      <a href="https://chatness.app/tour/offline-support" title="Chatness Features Tour">
    <img src="https://cdn.inl.gg/images/chatness/features-tour-tile.png" alt="Chatness Features Tour" />
    </a>
</p>
<!-- <list :items="stack"></list> -->

## Demo

- App Store 👉&nbsp;&nbsp; https://apple.co/41VpNh8
- Google Play 👉&nbsp;&nbsp; https://bit.ly/chatness-android
- Self Hosted 👉&nbsp;&nbsp; https://demo.chatness.app

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
- 🔧&nbsp;&nbsp; [App Settings](/tour/app-settings)
- 🔐&nbsp;&nbsp; [Authentication](/tour/authentication)

<div style="max-width: 375px; margin: 0 auto">

<code-sandbox :src="demo"></code-sandbox>

</div>

## Why should I care?

- You need a versatile and free/cheap go-to server infrastructure to build a chat or any related app, but have no time to make it yourself.

- You need a chat or related app for your business, but don't want to spend a lot of money developing it from the ground up, or you don't want to pay a monthly fee for a service because what you need is dead simple.

- You're willing to take a risk at hiring someone to customize a pre-made app for your business, but you also don't have unlimited time and resources to experiment and fail.

- You want to build a chat or related app, but you don't want to spend a lot of time learning how to build it from scratch by yourself.

- Maybe you're already working on building something related at your company, but it's not working out as expected and you need to accelerate the process.

If you identify with any of the above, keep reading 👇

## What you need to know before buying

- You need to have a basic understanding of how to use the command line.

- You need to have a basic understanding of how to use Git.

- You need to have a basic understanding of how to use Firebase.

- You need to have a basic understanding of how to use Angular.

- You need to have a basic understanding of how to use Ionic.

- You need to have a basic understanding of how to use Capacitor.

- You need to have a basic understanding of how to use TypeScript.

- You need to have a basic understanding of how to use JavaScript.

- You need to have a basic understanding of how to use HTML.

- You need to have a basic understanding of how to use CSS.

## App engineering overview

The app is built on top of the following concepts:

- It must be easy to set up and reuse.

- It must be easy to customize.

- It must be easy to maintain.

- It must be easy to scale.

- It must be easy to deploy.

- It must be easy to test.

- It must be easy to debug.

- It must be easy to integrate with other apps.

- It must be easy to integrate with other services.

That said, the project structure is arranged in a way that makes it easy to understand and maintain, and it's also easy to customize and extend. Take a look at the project folder structure below and what they mean.

## Basic App Structure

```
├── src
│ ├── functions
│ ├── app
│ │ ├── actions
│ │ ├── api
│ │ ├── components
│ │ ├── configs
│ │ ├── effects
│ │ ├── guards
│ │ ├── pages
│ │ ├── reducers
│ │ ├── theme
│ │ ├── types
```

### Functions

Dedicated environment for infrastructure code like the push notification handler.

## Actions

Plain JavaScript objects that represent an intention to change the state of the application. They contain a type property that describes the type of action being performed and any additional data required to complete the action. Actions are typically created by action creators, which are functions that return an action object.

We use actions on Chatness to dispatch events to the Redux store, which will then update the global state of the application. We don't rely on Angular Services, NGRX, or any other state management system to handle global states. We aim to keep the app as simple as possible, and we don't want to introduce unnecessary complexity.

> To improve even more your dev experience, make sure to install the [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to see and track global state changes in real time.

examples:

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

## API

The API folder contains all the external requests being made and is shared across components. Those are "pure functions" that only return data and don't have any side effects. They are responsible for fetching data from external sources, such as Firestore, and returning the data in a format that the application can use. That said, in case you want to use a different API you can easily replace the functions inside this folder.

## Components

The components folder contains reusable UI elements that can be used throughout the application. These elements are written as Angular components, which consist of a TypeScript class and an HTML template. We rarely use Angular directives, pipes, or services in our components, and we try to keep all the source code deadly simple in order to make them "portable" to other frameworks if needed.

## Configs

The configs folder contains configuration files for the application, such as environment variables, API keys, and other settings that need to be loaded at app runtime.

## Effects

Effects are functions that handle side effects in the application. Again not tied to Angular at all, they allow you to perform actions in response to specific events, such as when an action is dispatched, when a component is initialized, the user navigates, or when the user interacts with the UI.

## Guards

Guards and routes are the only framework-specific Angular thing used in Chatness. They are used to control access to specific routes or parts of the application based on certain conditions. For example, a guard is used to prevent unauthenticated users from accessing sensitive areas.

## Pages

The pages folder contains the main views or screens connected to routes. Each page consists of one or more components.

## Reducers

Reducers are pure functions that take the current state of Chatness and the action and return a new state that reflects the changes made by this action. In other words, they are responsible for updating the store in response to actions. We use Redux only to manage the global state of the application, components are still responsible for handling their own local state.

## Theme

The theme folder contains stylesheets and other resources related to the visual design of Chatness.

## Types

The types folder contains all shared type definitions for various parts of Chatness. These types are used to ensure type safety and catch errors at compile time. We use TypeScript and Angular templates in strict mode to ensure the most type safety possible.

## Assets

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

## Theme

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

## Looking for the v1 version of docs?

The v1 version of Chatness is still available at [v1.chatness.app](https://v1.chatness.app)

<style>
    .prose img, .wrapper p {
        margin: 0;
    }
</style>
