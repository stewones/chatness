---
id: install
title: Install
description: ''
hide_title: true
---

# Install

Once [downloaded](/app/download) extract files, enter the folder and then

1. Rename mentions to your own app name using these one-liner commands

   - `find ./ -type f \( -name "*.txt" -o -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/Chatness/MyChatApp/g' {} ';'`

   - `find ./ -type f \( -name "*.txt" -o -name "*.js" -o -name "*.json" -o -name "*.html" -o -name "*.ts" \) -exec sed -i "" 's/chatness/mychatapp/g' {} ';'`

2. issue `npm install`
