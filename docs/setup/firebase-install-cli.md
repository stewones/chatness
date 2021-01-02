---
id: firebase-install-cli
title: Install Firebase CLI
description: ''
hide_title: true
---

# Install Firebase CLI

Once the project is ready you'll need to install Firebase CLI which is necessary for some tasks ahead.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
className="unique-tabs"
defaultValue="auto"
values={[
{label: 'auto', value: 'auto'},
{label: 'npm', value: 'npm'},,
]}>
<TabItem value="auto">

You can install the Firebase CLI using this automatic script which automatically detects your operating system, downloads the latest Firebase CLI release, then enables the globally available firebase command.

```sh
curl -sL https://firebase.tools | bash
```

</TabItem>
<TabItem value="npm">

You can also use npm to install the Firebase CLI

```sh
npm install -g firebase-tools
```

</TabItem>
</Tabs>

## Log in and test

After installing the CLI, you must authenticate

```sh
firebase login
```

Then you can confirm authentication by listing your Firebase projects

```sh
firebase projects:list
```
