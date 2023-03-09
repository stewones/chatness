---
title: Developing with Chatness
description: ""
position: 20
category: Guides
---

Basic dev workflow while using Chatness

- `pnpm run dev` to start the client dev server with hot reload using angular
- `pnpm run functions` to start firebase emulators in watch mode
- `pnpm run seed` to seed firebase emulators with some initial data
- check if app's environment has `emulator` set to true.

> Everytime you stop and re-run emulators, you will need to seed the data again. This is a Firebase limitation and there's nothing we can do about it. Learn more on how to implement or customize the seeders at app's `scripts` folder.

<alert>

`pnpm` stands for Perfomant NPM. We adopt it as our package manager because it's faster than NPM and Yarn. You can read more about it [here](https://pnpm.io/). If you don't want to use it, you can just ignore the `p` and use `npm` or `yarn` instead.

</alert>

## App Routes

Dealing with Chatness routes is simpler than you think, thanks to the awesome Angular Framework and Ionic. The routes which don't depend on a bottom tabbar are defined in `src/app/app-routing.module.ts`. While the dependent ones are defined in `src/app/shell-routing.module.ts`. Routes/Pages depedent on the bottom tabbar are stacked in the view, while the others are rendered uniquely.

So in order to create a new page connected to a route, you need to first create a new module in `src/app/pages` and then connect to its route/pathname in one of the above files.

- Example

Let's say you want to create a new page called `MyPage` and you want it to be connected to the route using the pathname `/my-page`. This is going to be a standalone page which we don't want to stack in the view. You got to do the following:

- Create a new module in `src/app/pages/my-page` and name it `my-page.module.ts`
- Create a new component in `src/app/pages/my-page` and name it `my-page.component.ts`
- Add the following to `src/app/pages/my-page/my-page.module.ts`:

```typescript
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyPageComponent } from "./my-page.component";

const routes: Routes = [
  {
    path: "",
    component: MyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPageRoutingModule {}
```

and then add the following to `src/app/app-routing.module.ts`:

```typescript
const routes: Routes = [
  // ...
  {
    path: "my-page",
    loadChildren: () =>
      import("./pages/my-page/my-page.module").then((m) => m.MyPageModule),
  },
];

@NgModule({
  // ...
})
export class AppRoutingModule {}
```

## Dealing with global states

Global states are managed using the `@elegante/browser` package. The store is defined by reducers located at `src/app/reducers` and loaded at the very earlier stage of app startup in `src/app/effects/appStart`.

### Creating a new reducer

To create a new reducer, or a new piece of global state, you just need to create a new file in `src/app/reducers` and export from the index.ts file. The reducer will be automatically loaded by the app.

So let's say you want a new reducer called `myReducer` and you want to store a string in it.

```typescript
import { createReducer } from "@elegante/browser";

export const myReducer = createReducer<// state type
{
  myString: string;
}>(
  // initial state
  {
    myString: null,
  },
  {
    // actions
    changeMyString: (state, action) => {
      state.myString = action.payload;
    },
  }
);
```

And that's it. Now you can either dispatch the action `changeMyString` from anywhere in the app or you can use the `getState` and `connect` apis to hook in the state and get data synchronously and asynchronously.

### Creating an action

```typescript
import { createAction } from "@elegante/browser";
export const changeMyString = createAction("changeMyString");
```

### Updating the state

```typescript
import { dispatch } from "@elegante/browser";
dispatch(changeMyString("Hello World"));
```

### Consuming the state

```typescript
// Synchronously
import { getState } from "@elegante/browser";
const myString = getState("myReducer.myString");

// Asynchronously
import { connect } from "@elegante/browser";
connect("myReducer.myString").subscribe((myString) => {
  // do something with myString
});
```

<alert>

@elegante/browser is a package that I created to manage global states, among other stuff, in a simpler, type-safe and framework-agnostic way. So you can use it with Angular, React, Vue, anything you want. It's a very simple and lightweight package. You can find out more about it [here](https://github.com/stewones/elegante/tree/master/packages/browser)

</alert>
