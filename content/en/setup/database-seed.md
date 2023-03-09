---
title: Seed Database
description: ""
position: 13
category: Setup
---

<alert>

This step requires a [Service Account](/setup/firebase-add-service-account) in place

</alert>

<alert>

Check out [Firebase Emulators](/setup/firebase-emulators) if you want to populate the emulators instead of production database.

</alert>

From the app root run these commands in order

1. `pnpm run seed:users`
2. `pnpm run seed:groups`
3. `pnpm run seed:messages`

- Check email+password of created users at `scripts/seed/users.json`
- Messages seed may take a while to complete in production since it adds 1 year worth of data for heavy load testing purposes. If you want to tweak the number of days to add, add a second param to the command, like `pnpm run seed:messages 30` to add only 30 days of messages.
- Check Firebase console to see data added on Cloud Firestore.
- Once it's completed you should be all set to [run the app](/setup/app-run).

## Other useful commands

- add a single user

replace the values with your own

```sh
pnpm run add:user [email@user.com] [password] [name]

```

- delete an user from auth and firestore

replace the values with your own

```sh
pnpm run del:user [email@user.com]
```

- clean up auth users

<alert type="warning">
This will delete all users from your Firebase Authentication, proceed with caution.
</alert>

```sh
🚨🚨🚨 node ./scripts/cleanUpAuth.js
```
