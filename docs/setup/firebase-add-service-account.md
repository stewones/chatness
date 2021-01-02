---
id: firebase-add-service-account
title: Add Service Account
description: ''
hide_title: true
---

# Add Service Account

Now it's time to add a new config file that should never be published within the app.
This step is only necessary if you plan to run database seeds for testing.

:::caution
This is a sensitive information intended to only run on backend. So make sure this file will be present in your `.gitignore` afterwards
:::

### Grab your config

From Firebase menu, click the cog button located right after _Project Overview_ and then access _Project Settings_

![firebase project settings](/images/docs/firebase-project-settings.png)

Then access the **Service accounts** tab and **generate a new private key** for Node.js

![firebase service account](/images/docs/firebase-service-account.png)

Once the json is downloaded copy it to the `seeds` folder and rename the file

```json title="/seeds/service-account.json"
{
  "type": "service_account",
  "project_id": "my-chat-app-d7vac",
  "private_key_id": "632c0f93346d5287334f714a5ae2b2e92ccbfc9",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCwcbt0bhtJ4cij\n0xdBVWpZFmJa9igaA8gNdmJdcicRakCmwDfLhyKmsmWkts9zcLNb3jAsOGq8PAOU\nPxJUzC564NaQRKAAqmE3YPkTOn/+JIu9QIdAA4zmXO\nFhAVUeGsmoJE00vU/sUaNw==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-skstr@my-chat-app-d7vac.iam.gserviceaccount.com",
  "client_id": "1091161964712176364",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-skstr%40my-chat-app-d7vac.iam.gserviceaccount.com"
}
```
