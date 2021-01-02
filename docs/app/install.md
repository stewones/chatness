---
id: install
title: Install
description: ''
hide_title: true
---

# Install

Once [downloaded](/app/download) you can extract files, enter the folder and then

1. Rename `Chatness` mentions to your own app name using these one-liner commands

   - `find ./ -type f \( -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/Chatness/MyChatApp/g' {} ';'`

   - `find ./ -type f \( -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/chatness/my-chat-app/g' {} ';'`

2. issue `npm install`
