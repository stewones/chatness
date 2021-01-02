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

From the app root, issue the following commands in order

1. `npm run seed:users`
2. `npm run seed:groups`
3. `npm run seed:messages`

- You can check credentials (email+password) of created users in the file located at `seeds/users.json`
- Messages seed may take a while to complete since it adds 1 year worth of data

Once it's completed you should be all set
