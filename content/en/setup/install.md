---
title: Install
description: ""
position: 7
category: Setup
---

Once [downloaded](/setup/app-download) you can extract files, cd to the project root folder and do the following steps.

> The project root folder is the one containing files like `package.json`, `angular.json` and `capacitor.config.json`. Once you extract the zip, just cd to `chatness-app-x.y.z`. Everything asked you to execute from now on will require your current working directory to be this folder.

<alert>

👀 Prefer a video tutorial? [Watch this](https://www.youtube.com/watch?v=5C_HmD94gGE). The video was recorded using `npm` as package manager, but the steps are the same.

</alert>

## Rename

Rename `MyChatApp` and `my-chat-app` mentions to your own app name using these one-liner commands.

- `find ./ -type f \( -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/Chatness/MyChatApp/g' {} ';'`

- `find ./ -type f \( -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/chatness/my-chat-app/g' {} ';'`

To verify if everything went well you can open the `package.json` file and check for the `name` property.

## Dependencies

Issue `pnpm install` to be installing all the project dependencies before continuing. Never try to rename the app after npm installation, first rename and then install. The order matters. Also make sure to not skip any step from now on if you plan to quickly get Chatness off the ground.

<alert>

Chatness v2 uses `pnpm` as package manager, it's the performant version of npm. If you still don't have it installed on your system make sure to do so before continuing. You can install it using `npm i -g pnpm` or following other [official instructions](https://pnpm.io/installation).

</alert>
