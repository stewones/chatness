---
id: structure
title: Structure
description: ''
hide_title: true
---

# Structure

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
import { setCache } from '@rebased/cache';

export function uiSetDisplay(mode: 'light' | 'dark') {
  return function (dispatch) {
    setCache('uiDisplay', mode);
    dispatch({
      type: 'setDisplay',
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

General styling stuff built with css variables in mind. So if you wanna change some primary color in the app/elements you gonna just need to edit a variable located here.

Fonts are loaded from `fonts.scss` so pick one font and uncomment its line.
