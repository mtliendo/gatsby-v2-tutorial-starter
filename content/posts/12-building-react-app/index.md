---
id: 12
path: '/intermediate/react-style'
cover: './fashion-making.png'
title: 'React Componentization'
---

### 👩🏽‍🎤 Application Style and Layout

![fashion-making](./fashion-making.png)

Often times the applications we build tend to favor functionality over style. While the mantra of "make it work, make it look nice™️" reigns true, basic styling and layout are foundationally important for any frontend application.

In the very [first beginner module](/html-css), semantic elements were discussed in depth and as such will be assumed knowledge in this section.

---

🚨 Challenge Assignment 🚨

Given the sandbox located [here](https://codesandbox.io/s/photo-viewer-final-r2bg3)

Your task is to convert it to React in such a way that all the styles are still displayed in its relevant component.

### App Behavior

- Level 1
  - When user lands on the home page, and the user searches for an image, a request is made using [this api](https://pixabay.com/api/?key=16687692-5b6e17d3da9d23340b26af943&q=turtle&image_type=photo&safesearch=true)
  - The resulting images are captured in state.
- Level 2
  - When user navigates to the About page, a simple "this is the about page" message appears.
- Level 3
  - In addition to searching via a search term, the user is also able to [search via category](https://pixabay.com/api/docs/#api_search_images) by selecting an item from a dropdown. Instead of `useState` use `useReducer`.
  - Selecting an image will also take the user to a page that only shows the given image and author.
