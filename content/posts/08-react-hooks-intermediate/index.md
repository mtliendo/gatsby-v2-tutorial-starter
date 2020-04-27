---
id: 8
path: '/react-hooks-2'
cover: './react-hooks-2-preview.jpg'
title: 'React Hooks Pt. 2'
---

# Intermediate React Hooks

Up until now, we've only explored `useState()` as our entry into React Hooks. However there are many more hooks that we can take advantage of.

<details>
<summary>🗒️ Quick reminder of what a hook is:</summary>
 A hook is way to perform an action within a function component. If that sounds vague, it's because it is! Hooks allow us to do many different things. They're just functions afterall, and functions in JavaScript are very flexible.
</details>
<br/>
In this section, we'll checkout a few other hooks React has available to us, as well as explore a 3rd party hook that's been provided to us.

## Handling Side-Effects with useEffect

`useEffect` is a function that is triggered when our application first runs, as well as when a variable changes that we told it to watch.

```js
//useEffect takes in two arguments: a function, and a dependency list
useEffect(() => {
  fetch('somedata.com')
    .then((res) => res.json())
    .then((data) => console.log(data)) //do something, like update state
}, []) //an empty array empty run only on page load
```

## Better State Management with useReducer

A _reducer_, as with many names we've seen so far, is simply a fancy name for a function that does something specific.

In this case, a reducer is a function that takes in two arguments: a piece of data, and an object with at least a `type` property. The job of the reducer is to say "when the type equals _this_, then return a new piece of data".

Let's clear this up with an example.

```js
const currentState = 2

const reducer = (state, action) => {
  if (action.type === 'ADD_ONE') {
    return state + 1
  }
  if (action.type === 'SUBTRACT_ONE') {
    return state - 1
  }
}

const newState = reducer(2, { type: 'ADD_ONE' })
```

🚨Project Time🚨

https://codesandbox.io/s/react-hook-todo-list-j0ic5?from-embed=&file=/src/LightShowPage.js
