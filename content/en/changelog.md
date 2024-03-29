---
title: Changelog
description: ""
position: 3
category: ""
---

## 2.1.0

> March 9, 2023

### Welcome ChatGPT 🤖

<img src="https://cdn.inl.gg/images/chatness/introducing-alicia.gif" width="250" alt="Chatness now with OpenAI's ChatGPT" />

This version introduces OpenAI's ChatGPT feature. A new `ai` user named `Alicia` is created when the seed is ran, this user acts like an assistant for Q&A. You can ask it questions and it will answer you. It's a great way to test the app and see how it works under the hood.

Other minor changes:

- Updated to Capacitor 4
- Added support for Firebase Emulators
- Added hot key "meta+enter" to send messages quickly (mac command+enter, windows ctrl+enter)
- Added support for automatically detect links and open them with in-app browser.
- Added a new global config `APP_INITIAL_ROUTE` to customize the initial route, renamed `home` page to `groups` and made `contacts` the initial route.
- Many small bug fixes and improvements like a bug on contacts list where it was not showing empty state when there were no contacts.
- Updated docs and added more sections
  - [Firebase Emulators](/setup/firebase-emulators)
  - [OpenAI's GPT-3](/setup/openai)
  - [Developing with Chatness](/guides/developing-with-chatness)

## 2.0.0

> March 2, 2023

### Major changes

Updating Firebase, Angular and some other packages. This is a major update and it will require some changes on your side.

- Updated to Firebase 9.17.1
- Updated to Angular 15.2.1
- Updated to Ionic 6.6.0
- All external requests have been moved from `effects` folder to a new folder called `api`. In addition, the `flew` dep has been removed and calls rewritten to use pure Firebase v9 APIs.
- The `elements` build feature has been removed. Chatness now doesn’t produce web components anymore and is intended to work as an angular application from now on. We plan to release Chatness for other frameworks soon.
- `authWithUserIp` has been removed as it was only intended to be used by earlier mechanisms of Chatness Demo, it wasn't designed to be a feature at all.
- All `interfaces` and `types` have been grouped under the new folder `types` at the root level.
- `tell(…)` effect has been renamed to `makeAlert(…)`
- Enabled angular templates in strict mode for better type checking
- Fixed a bug on contacts search where results were not being updated correctly
- now Chatness is shipped with a `pnpm-lock.yaml` file to take advantage of a faster and more efficient package manager. If you prefer to use `npm` or `yarn` you can delete the `pnpm-lock.yaml` file and run `npm install` or `yarn install` instead. If you prefer to use `pnpm` you can run `pnpm install` as usual. If you don't know what `pnpm` is, you can read more about it [here](https://pnpm.io/).

## Flew migration

If you have adopted flew in some of your projects, here's a quick guide on how to migrate away from it.

- @flew/state becomes @elegante/browser
- @flew/core becomes @elegante/sdk
- @flew/network removed. You need to rewrite the network requests by yourself using any external source (ie: firebase sdk, parse sdk, native fetch api, etc)
- Since flew’s `fetch` is removed we can use any external source and do cache/state values automatically with the newer `fast` api importable from `@elegante/browser`
- All cache apis are removed (setCache, getCache, etc). They can be replaced with the `LocalStorage` and `IndexedDB` wrappers importable from `@elegante/sdk`. These wrappers are also used internally by the `fast` API but you can replace them with any “Storage” mechanism. (See fast options on browser load)
- All the other flew packages are deprecated (ie: Firebase, Parse, etc). Everything can be done or reworked using just elegante’s sdk and browser packages. Elegante's packages are fully typed with typescript and examples, if you need help migrating your code, please reach out to us.

## 1.3.0

> February 21, 2022

### Minor fixes

Maintenance update with minor fixes

- Fixed a bug on elements build script
- Updated to Angular v13
- Refactor to use <a href="https://flew.dev">Flew.js</a> as network, cache and state foundation

## 1.2.1

> September 16, 2021

### Minor fixes

Maintenance update with minor fixes

- Fixed a bug on chat contacts
- Made android app look as an actual android
- Remove emoji-regex dep in favor of a local effect
- Integrate Tailwind to Angular CLI
- Update to Capacitor v3
- Update to Angular v12

## 1.2.0

> February 20, 2021

### Push Notifications arrived 🍭

For first time senders, meaning when a contact that has never talked to you before send a private message, that very first message will fire a notification on your registered devices (iphone, android, ipad, tablet, etc). Devices are registered on every login and deregistered on logout.

<img class="w-64 m-auto" src="/images/tour/push-notifications-first-time-sender.jpeg" />

### 1x1 push

Once you estabilish contact with someone, your registered devices should receive all notifications from that person in background (app closed or minimized) and increase the app badge counter. Badge counter is reseted once you open the app.

<img class="w-64 m-auto" src="/images/tour/push-notifications-1x1.gif" />

### Groups push

When a chat group is visited you automatically opt-in to receive notifications from all the users inside that group.

<img class="w-64 m-auto" src="/images/tour/push-notifications-group.jpeg" />

### Notification Settings

You can always decide later on from whom you want to receive push notifications, both for groups and users.

<img class="w-64 m-auto" src="/images/tour/push-notifications-settings.jpeg" />

### Chat Settings

You can also silent an user or group directly from the chat using the menu option (three dots) in the top/right corner.

<img class="w-64 m-auto" src="/images/tour/push-notifications-silent.jpeg" />

### Other fixes and improvements

- Fixed a bug on _loggedOut_ guard
- Increased perf for contacts list by adding virtual scroll
- Adjusted tabbar background for Android which doesn’t support backdrop filter
- Adjusted icons margin on profile page
- Fixed light theme color for textarea
- Added Android scripts to run and build
- Increased font-size in some places
- Added icon+splash and script to generate resources automatically
- Reviewed and made tweaks in the existing docs
- Added docs for generating resources
- Added docs for push notifications

## 1.1.0

> January 19, 2021

Mainly purpose of this release is aiming make it possible to easily add pictures and videos from user's device to a conversation.

### Message deletion

Added message delete option (long press on message). It's synced in realtime with cache invalidation.

<img class="w-64 m-auto" src="/images/tour/chat-message-delete.gif" />

### Media upload

Added media upload options alongside the message bar. Select photos or videos. Take picture or record video.

<img class="w-64 m-auto" src="/images/tour/chat-select-photos.gif" />

### Other fixes and improvements

- Added new rules. Make sure to run _firestore:deploy_ again
- Updated elements. Make sure to _build:elements_ again
- Added emoji detector to increase font size when a message is composed only by an emoji
- Added image zoom
- Fixed _registerWithFirebase_ effect
- Fixed _changeNameWithFirebase_ effect
- Improved perf and fixed issues on chat messages
- Improved perf and fixed realtime issues on contact list

## 1.0.0

> January 1, 2021

## Happy new year ✨🍾

Finally releasing today Chatness v1, including some minor fixes and
great stuff as

- database seeds
- dark theme
- a brand new section for contacts with search
- a new searchable groups in home

Hope y'all enjoy.

## 0.1.0

> December 15, 2020

Just released the first stable version of Chatness which adds the main functionalities as

### Basic auth workflow

- email sign-in
- password reset
- account creation

### Profile handler

- change name
- change email
- change password
- logout

### Chat in groups and private

- adaptive message balloons
- timestamp based pagination
- messages timestamp
- in a group click on user to message in private
