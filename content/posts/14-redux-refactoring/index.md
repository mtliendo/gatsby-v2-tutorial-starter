---
id: 14
path: '/intermediate/redux-migrations'
cover: './eastwood-delivery.png'
title: 'Migrating From Redux'
---

![eastwood delivery](./eastwood-delivery.png)

Whenever the case comes up about refactoring a large portion of an application to use something foundationally different, the mental model is that there are going to be many moving parts.

In this section we'll explore those parts and come up with practical steps that allow to clean up our code, minimize our dependencies, all while delivering the same value to our customers and end-users.

## Breaking Down the Class-Based Component

So far in this intermediate module, we've glanced past the idea of class-based components in favor of their functional counterparts. However, we've now reached a point where we want to discuss them as it relates to our migration path forward.

## 🛩 🪂 10,000 Foot Overview of Class Components

```js
class Sample extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.setState({count: 0})
  // }
  state = {count: 0}

  ❌componentWillMount() {
    console.log('called before the component mounts. Dont use this. Act like it doesnt exist.')
  }

  componentDidMount() {
    console.log('called after first render..good spot to fetch data😏')
  }

  componentWillReceiveProps(nextProps) {
    console.log('called anytime the component gets a new set of props')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('needs a boolean to be returned to determine if the componet should update based on a condition.')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('called after any rerender')
  }

  componentWillUnmount() {
    console.log('called just before the component unmounts. Good place to do cleanup.')
  }

  ❌handleClick() {
    //"this" is not available.
    this.setState((state) => this.setState({count: state.count + 1}), () => {
      console.log("I'll be called when the state is done updating")
    })
  }

  ✅ handleClick = () => {
    this.setState((state) => this.setState({count: state.count + 1}), () => {
      console.log("I'll be called when the state is done updating")
    })
  }

  render() {
    return (
      <div>
      <p>{this.state.count}</p>
      <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}

```

The above is an example of a _class component_ with several _lifecycle methods_ listed. It's likely that not all of these lifecycle methods will be used in a given component, however it is likely that _some_ will be present.

Let's kick things off by taking a peek at how we can refactor a class to a function based component. While seemingly simple, note that [not all production code is complicated](https://github.deere.com/cap-it-ui/equipment/blob/master/src/views/reinstatement/reinstatement-provider.js#L4)

https://codesandbox.io/s/class-to-hooks-starter-lnyg8?fontsize=14&hidenavigation=1&theme=dark

In most scenarios, the above refactor is typical. However for the sake of experience, let's take another look at how we can refactor, using code that is a bit more production like. As an additonal challenge, we'll replace state, with `useReducer` where appropriate.

https://codesandbox.io/s/class-to-hooks-2-xfh1v?fontsize=14&hidenavigation=1&theme=dark

> 🤔 Is this really production-like code?

[maybe](https://github.deere.com/cap-it-ui/equipment/blob/master/src/views/common/partial-failure-machine-action-modal/partial-failure-machine-action-modal.js) 😏

## Examining Redux

Now that we've had a chance to play around with `useReducer` in the previous sandbox, let's see how well that knowledge transfers over to an application that uses the _actual_ [redux library](https://redux.js.org/)

> 🚨 Remember: Redux itself has nothing to do with react. It's a library agnostic way of managing state. As such, in React apps, the [react-redux library](https://react-redux.js.org/) is what links the two together.

The below image details the redux flow. The idea is that state can be managed completely outside of react components in a single object (_store_). That store wraps our entire application, and anytime the state updates, our application rerenders.

![redux-cycle](./redux-cycle.png)

As always, let's start by taking a look at what a simple redux-driven app looks like.

In this simple todo app, after reviewing it's current architecture, we'll take the following steps to refactor:

1. Ensure all the components are function components
2. Review where the state lives
3. Identify if there is state is better off being local/passed down through a parent, as opposed to global
4. 🚨 Decide and create the context for our app using `useReducer`

https://codesandbox.io/s/redux-todo-starter-class-p33bu?file=/src/index.js

🗒️ Note that the redux version of this project is taken directly from the redux docs. If wanting to explore the sandbox in its original state, visit it [here](https://codesandbox.io/s/redux-todo-65271)
