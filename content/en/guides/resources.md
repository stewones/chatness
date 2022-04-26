---
title: Resources
description: ""
position: 19
category: Guides
---

Adding icon and splash resources to Chatness app is easy as cake.

1. Edit the graphic files located at the `resources` folder
2. Execute `npm run resources`

This command will generate all needed files in their respective formats and copy over native projects (ios and android). So make sure to first have added those platforms with `npx cap add ios` and `npx cap add android`

Initially `capacitor.config.json` is configured to have a splash screen duration of 0 seconds. In case you want to show the splashscreen just edit the property `launchShowDuration`.
