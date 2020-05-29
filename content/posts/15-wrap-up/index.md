---
id: 15
path: '/intermediate/wrap-up'
cover: './closing-thoughts.png'
title: 'Closing Thoughts'
---

![thinking at a table](./closing-thoughts.png)

In the famous words of Madonna, each of you can say you [made it through the wilderness](https://youtu.be/s__rX_WL100).

We've covered a bit and in this final class, I wanted to make sure that I left you with some closing thoughts and pathways forward.

## 🧈 Cooking with Recipes

I want to take a moment to talk about what we covered in this series and highlight some of the example projects that have come up.

> **I want to quickly get up and running with a React application on my computer**

`npx create-react-app your-project-name` is the goto way!

> **I want to keep track of some state in my app.**

`useState()` is a great choice for simple cases, forms with many fields or state that is derived from another piece of state is best used with `useReducer()`

> **I want to create routes in my application**

React Router has long been the goto choice for routing.

> **I want to make an API request**

`useEffect()` will not only handle request, but also many other side-effects in our components life-cycle.

> **I want to provide some state globally**

Global state can be created by using `createContext` in combination with `useContext`. The `value` prop passed in the `Provider` component decides what is given to components. Optionally, state can be updated by passing a function, or using `useState` or `useReducer`.

> **I want to make my components look pretty without too much work**

Even though many orgs use [Material UI](https://material-ui.com/), I personally prefer [ant design](https://ant.design/components/button/) since it provides many common components without too much overhead.

**Fetching Data**

Matt Pipho

https://codesandbox.io/s/photo-editor-final-p43h7?file=/src/components/ImageDetailPage.js

**Global State**

Janina Arul

https://codesandbox.io/s/practical-lake-rv2ne?file=/src/App.js

## Where To Go From Here

Even though the path away from redux is possible _and_ manageable with React hooks, migrations should be iterative.

As such, another option is to take a look at how redux aims to solve its own problems with hooks. Specifically, the react-redux new [hooks section](https://react-redux.js.org/next/api/hooks#hooks) looks promising and is already a [discussion point](https://github.deere.com/deere-ui/ui-tech-leveling/issues/414) at many orgs.

Thank you again, I assure you that the learning has not been one-sided! Feel free to keep up with my schenanigans on [Twitter](https://twitter.com/mtliendo) for more content.
