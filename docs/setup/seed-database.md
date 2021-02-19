---
id: seed-database
title: Seed Database
description: ''
hide_title: true
---

# Seed Database

:::note
This step requires a [Service Account](/setup/firebase-add-service-account) in place
:::

From the app root issue these following commands in order

1. `npm run seed:users`
2. `npm run seed:groups`
3. `npm run seed:messages`

- You can check email+password of created users at `seeds/users.json`
- Messages seed may take a while to complete since it adds 1 year worth of data

Check out Firebase console to see data being added on Cloud Firestore.
Once it's completed you should be all set to run the app.
