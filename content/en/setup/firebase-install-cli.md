---
title: Install Firebase CLI
description: ""
position: 9
category: Setup
---

Once the project is ready you'll need to install Firebase CLI which is necessary for some tasks ahead.

<code-group>
<code-block label="auto" active>

You can install the Firebase CLI using this automatic script which automatically detects your operating system, downloads the latest Firebase CLI release, then enables the globally available firebase command.

```bash
curl -sL https://firebase.tools | bash
```

</code-block>

<code-block label="npm">

You can also use npm to install the Firebase CLI

```bash
npm install -g firebase-tools
```

</code-block>
</code-group>

## Log in and test

After installing the CLI, you must authenticate

```sh
firebase login
```

Then you can confirm authentication by listing your Firebase projects

```sh
firebase projects:list
```
