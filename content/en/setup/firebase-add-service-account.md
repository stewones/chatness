---
title: Add Service Account
description: ""
position: 12
category: Setup
---

Now it's time to add a new config file that should never be published within the app.
This step is only necessary if you plan to run database seeds for testing.

<alert type="warning">

This is a sensitive information intended to only run on backend. So make sure this file will be present in your `.gitignore` afterwards

</alert>

### Grab your config

From Firebase menu, click the cog button located right after _Project Overview_ and then access _Project Settings_

![firebase project settings](/images/docs/firebase-project-settings.png)

Then access the **Service accounts** tab and **generate a new private key** for Node.js

![firebase service account](/images/docs/firebase-service-account.png)

### Paste in the correct place

Once the json is downloaded copy it to the `seeds` folder and rename the file to `service-account.json`

```json title="/seeds/service-account.json"
{
  "type": "service_account",
  "project_id": "my-app-d7vac",
  "private_key_id": "632c0f93346d5287334f714a5ae2b2e92ccbfc9",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADA",
  "client_email": "firebase-adminsdk-skstr@my-app-d7vac.iam.gserviceaccount.com",
  "client_id": "1091161964712176364",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-skstr%40my-chat-app-d7vac.iam.gserviceaccount.com"
}
```

<alert type="warning">

Final result should look like as the code snippet above. Make sure to add this file into your `.gitignore`

</alert>
