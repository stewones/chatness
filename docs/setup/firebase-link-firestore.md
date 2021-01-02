---
id: firebase-link-firestore
title: Link with Firestore
description: ''
hide_title: true
---

# Link with Firestore

Now we need to link the app with Firestore so we can easily deploy our indexes and rules

```sh
firebase init firestore
```

This command will prompt a few questions

1. Select to _use an existing project_
2. Select the recently created project _my-chat-app_
3. On `What file should be used for Firestore Rules?` press enter
4. On `File firestore.rules already exists. Do you want to overwrite` press N
5. On `What file should be used for Firestore indexes?` press enter
6. On `File firestore.indexes.json already exists. Do you want to overwrite` press N

Afterward the CLI should generate 2 new files `.firebaserc` and `firebase.json` containing specifics firebase configs.

## Deploy rules and indexes

Now we can safely deploy Chatness rules and indexes

```sh
firebase deploy --only firestore:indexes,firestore:rules
```

:::info
Learn more about [Firestore rules](https://firebase.google.com/docs/firestore/security/get-started) and [Firestore indexes](https://firebase.google.com/docs/firestore/query-data/indexing)
:::
