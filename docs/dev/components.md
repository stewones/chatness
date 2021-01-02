---
id: components
title: Components
description: ''
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Components

### auth-register

<Tabs
defaultValue="output"
values={[
{label: 'Output', value: 'output'}
]}>

<TabItem value="output">

| Name      | Type       |
| --------- | ---------- |
| onSuccess | `ChatUser` |
| onError   | `any`      |

</TabItem>
</Tabs>

### auth-reset

<Tabs
defaultValue="output"
values={[
{label: 'Output', value: 'output'},
]}>

<TabItem value="output">

| Name      | Type       |
| --------- | ---------- |
| onSuccess | `ChatUser` |
| onError   | `any`      |

  </TabItem>
 </Tabs>

### auth-sign

<Tabs
defaultValue="output"
values={[
{label: 'Output', value: 'output'},
]}>
<TabItem value="output">

| Name      | Type       |
| --------- | ---------- |
| onSuccess | `ChatUser` |
| onError   | `any`      |

  </TabItem>
 </Tabs>

### chat-contacts

<Tabs
defaultValue="input"
values={[
{label: 'Input', value: 'input'},
{label: 'Output', value: 'output'},
]}>
<TabItem value="input">

| Name    | Type       |
| ------- | ---------- |
| from    | `ChatUser` |
| keyword | `string`   |

</TabItem>
<TabItem value="output">

| Name           | Type          |
| -------------- | ------------- |
| onContactClick | `ChatMessage` |

  </TabItem>
 </Tabs>

### chat-groups

<Tabs
defaultValue="input"
values={[
{label: 'Input', value: 'input'},
{label: 'Output', value: 'output'},
]}>
<TabItem value="input">

| Name    | Type          |
| ------- | ------------- |
| groups  | `ChatGroup[]` |
| keyword | `string`      |
| loading | `boolean`     |

</TabItem>
<TabItem value="output">

| Name    | Type        |
| ------- | ----------- |
| onClick | `ChatGroup` |

  </TabItem>
 </Tabs>

### chat-messages

<Tabs
defaultValue="input"
values={[
{label: 'Input', value: 'input'},
{label: 'Output', value: 'output'},
]}>
<TabItem value="input">

| Name                  | Type       |
| --------------------- | ---------- |
| entityType            | `ChatType` |
| from                  | `ChatUser` |
| to                    | `ChatUser` |
| maxMessagesPerRequest | `number`   |

</TabItem>
<TabItem value="output">

| Name          | Type       |
| ------------- | ---------- |
| scrollDown    | `void`     |
| scrollUp      | `void`     |
| onAvatarClick | `ChatUser` |

  </TabItem>
 </Tabs>

### message-bar

<Tabs
defaultValue="input"
values={[
{label: 'Input', value: 'input'},
{label: 'Output', value: 'output'},
]}>
<TabItem value="input">

| Name        | Type                 |
| ----------- | -------------------- |
| from        | `ChatUser`           |
| to          | `ChatUser/ChatGroup` |
| placeholder | `string`             |
| entityType  | `ChatType`           |

</TabItem>
<TabItem value="output">

| Name            | Type          |
| --------------- | ------------- |
| onMessage       | `ChatMessage` |
| onKeyboardOpen  | `void`        |
| onKeyboardClose | `void`        |

  </TabItem>
 </Tabs>

### message-compose

<Tabs
defaultValue="input"
values={[
{label: 'Input', value: 'input'},
{label: 'Output', value: 'output'},
]}>
<TabItem value="input">

| Name | Type       |
| ---- | ---------- |
| from | `ChatUser` |

</TabItem>
<TabItem value="output">

| Name      | Type          |
| --------- | ------------- |
| onMessage | `ChatMessage` |
| onError   | `any`         |

  </TabItem>
 </Tabs>
