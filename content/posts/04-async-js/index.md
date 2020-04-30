---
id: 4
path: '/async-js'
cover: './async-js.jpg'
title: 'Async JS'
---

# Asynchronous JavaScript

My favorite section! Something about pulling data from a 3rd party source still feels so magical to me.

It's also my favorite because instead of spending a lot of time talking about how something is done, we get to just learn by building.

## Review Async Flow

It's worth taking a brief moment to describe what _asynchronous_ means.

### Synchronous Flow

1. Wake up
2. Make Coffee <-- **Wait for coffee to stop brewing**
3. Put Clothes in Laundry <-- **Wait for clothes to get done washing**
4. Make Breakfast

https://media.giphy.com/media/myPdoRAlad0J2/giphy.gif

```js
console.log('hi!')
const name = 'Felicia'
console.log(`Bye, ${name}`)
```

### Asynchronous Flow

```js
console.log('hi!')
console.log(fetchDataFromAPI()) // undefined 🤨
console.log(`Bye, ${name}`)
```

## Introducing fetch

Arriving in es6, `fetch` is a way to greatly simplify making requests to 3rd party services, such as API endpoints.

Let's see what it looks like then discuss the syntax:

```js
//1
fetch('somewhere.com')
  //2
  .then(function (response) {
    //3
    //3.1
    return response.json()
  })
  .then(function (data) {
    //do stuff with the data
  })
```

1. `fetch` is a global function that we don't have to define. It takes in a url of where we would like to fetch the data from.

2. Because fetching some data takes time, to get notified of when this is done, we can call the `then` method. This function takes in a function with a response from the server.

3. Fetch has the response, but it doesn't know how to parse it. It has no idea if we are fetching an image, json, text etc. Here we tell it that we want JSON.
   1. 🚨 Whatever we return from a `.then` method is **not directly returned**. Instead, it is wrapped in an object that allows us to call `.then`

This construct--where we have something that is "thenable", is what is known as a `Promise`.

> 🗒️ Look at the code above, we have functions being used, and they are simply returning a value. It's more common--best practice, to rewrite the above code as such:

```js
fetch('somewhere.com')
  .then((response) => response.json())
  .then((data) => {
    //do stuff with the data
  })
```

## 🚨 PROJECT TIME 🚨

1. Example with slip api in console

   - display on the webpage

2. Example with dad joke

   - display on webpage

   https://codesandbox.io/s/fetch-intro-2jf5b

3. OMDB API

https://codesandbox.io/s/mobiesearch-tu44d?file=/src/index.js

💡Project ideas:

4. Random User API -- https://randomuser.me/api/
5. Giphy -- https://developers.giphy.com/docs/api/endpoint#search (create app for api key)

   - single gif from user
   - Giphy multiple gifs from user
   - Giphy user sets word and amount (two input fields)
   - User has delete button so they can delete a particular gif

   If needing some inspiration of what can be done, I put together a small project for you to checkout by clicking on the link below:

   https://csb-krmsm.netlify.com/
