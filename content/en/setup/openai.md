---
title: OpenAI GPT-3
description: ""
position: 14
category: Setup
---

Chatness currently supports [OpenAI GPT-3](https://openai.com/blog/openai-api/) as a chatbot engine. You can use it to create a chatbot that can answer questions and have a conversation with your users.

To configure OpenAI GPT-3 you need to create an account and [get an API key](https://platform.openai.com/account/api-keys).

Once you have the API key, you need to add it to the `functions/src/config.ts` file:

```typescript
export const OPENAI_API_KEY = "xyz";
```

you can also use environment variables to set the API key:

```typescript
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
```

Don't worry, your API key is not exposed to the client. It's only used in the server, hence the `functions` folder.

## Testing a conversation

To check if AI is working, open the Chatness app, go to the contacts list, add "Alicia" and start a conversation with her.

> Currently AI conversation is only available in PM (private messages) with users defined as AI.

## Modifying the AI user

`Alicia` is the default AI user, but you can change her name and avatar by modifying the `User` collection in database, just make sure to set the `ai` property to `true`. Alternativaly you can change/add new AI users within the json seeder at `scripts/seed/users.json` and re-run the `seed` command.

## Modifying the ML model

By default Chatness uses the `text-davinci-003` model as it's included in the free tier, but you can always change to another model by modifying the `OPENAI_MODEL` constant in `functions/src/config/openai.ts` file.

## Tweaking prompt intro

You can tweak and provide useful information to the AI beforehand. Just edit the file at `functions/src/config/chatgpt.ts`.
