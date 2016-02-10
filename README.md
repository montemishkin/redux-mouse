# redux-mouse

Utilities for managing mouse state with redux.

**Similar Art**: [redux-responsive](https://github.com/aaivazis/redux-responsive) - Manage the responsive state of your application using redux.


# Setup

First, add the reducer somewhere in your reducer tree.  It's just a reducer so you can put it wherever you want! For example, you could put it in your top level call to `combineReducers`.

```js
// reducer.js

import {combineReducers} from 'redux'
import {mouseReducer} from 'redux-mouse'

export default combineReducers({
    mouse: mouseReducer,
})
```

Second, you must add the event handlers to the window.  To do this, use the provided store enhancer.

```js
// store.js

import {createStore} from 'redux'
import {mouseStoreEnhancer} from 'redux-mouse'
import reducer from './reducer'

const store = createStore(reducer, mouseStoreEnhancer)

// or, if you have an initial state for the store
const store = createStore(reducer, initialState, mouseStoreEnhancer)

export default store
```

Note that if you are also using some [middlewares](http://redux.js.org/docs/advanced/Middleware.html), the call will look more like this:

```js
import {createSore, applyMiddlewares, compose} from 'redux'
import {mouseStoreEnhancer} from 'redux-mouse'
import reducer from './reducer'

const store = createStore(
    reducer,
    compose(
        mouseStoreEnhancer,
        applyMiddlewares(middleware1, middleware2)
    )
)

// or, if you have an initial state for the store
const store = createStore(
    reducer,
    initialState,
    compose(
        mouseStoreEnhancer,
        applyMiddlewares(middleware1, middleware2)
    )
)

export default store
```


## Using Custom Throttle Times

TODO: document this


# The Mouse State

The `mouseReducer` adds an object with the following keys to the store:

- `isDown`: (*bool*) True if the mouse is down.  False if it is up.
- `x`: (*number*) The x position of the mouse.
- `y`: (*number*) The y position of the mouse.


For example, if you put the `mouseReducer` under the key `mouse` (as is done in the examples above) then you can access the mouse's coordinates and click state like so

```js
// get the current state from the store
const state = store.getState()

// mouse's x position
state.mouse.x
// mouse's y position
state.mouse.y
// true if the mouse is down.  false if it is up.
state.mouse.isDown
```
