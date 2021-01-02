---
id: build-elements
title: Build Elements
description: ''
hide_title: true
---

# Build Elements

To be framework agnostic you gotta build Chatness elements bundle from your own end.

:::tip
Make sure to have followed all the setup stage and included the [Firebase SDK](/setup/firebase-add-sdk)
:::

```sh
npm run build:elements
```

This command will build the content from `src/app/components` as well as needed styles as custom elements (web components) into a single js bundle called `elements.js`.

Afterwards all you gotta do is to include this bundle in your framework of choice.

You can execute `npx serve dist/elements` to see the generated result.

Check `dist/elements/index.html` for further details.
