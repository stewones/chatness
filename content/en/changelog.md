---
title: Changelog
description: ""
position: 3
category: ""
---

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
