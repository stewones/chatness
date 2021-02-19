---
id: install
title: Install
description: ''
hide_title: true
---

# Install

Once [downloaded](https://chatness.app/login) you can extract files, cd to the root folder and

:::info
The root folder is the one containing files like `package.json`, `angular.json` and `capacitor.config.json`. Once you extract the zip, just cd to `chatness-app-x.y.z/chatness`. Everything asked you to execute from now on will require your current working directory to be the app root.
:::

## Rename

Rename `MyChatApp` and `my-chat-app` mentions to your own app name using these one-liner commands.

- `find ./ -type f \( -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/Chatness/MyChatApp/g' {} ';'`

- `find ./ -type f \( -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/chatness/my-chat-app/g' {} ';'`

To verify if everything went well you can open the `package.json` file and check for the `name` property.

## Install

Issue `npm install` to be installing all the project dependencies before continuing. Never try to rename the app after npm installation, first rename and then install. The order matters. Also make sure to not skip any step from now on if you plan to quickly get Chatness off the ground.
