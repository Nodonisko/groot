// @flow
import configureReducer from './configureReducer'
import configureMiddleware from './configureMiddleware'
import { applyMiddleware, createStore } from 'redux'

const configureStore = () => {
  const reducer = configureReducer()

  const middleware = configureMiddleware()

  const store = createStore(reducer, applyMiddleware(...middleware))

  // Enable hot reloading for reducers.
  if (module.hot && typeof module.hot.accept === 'function') {
    // React Native for some reason needs accept without the explicit path.
    // facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html
    module.hot.accept(() => {
      const replaceReducer = require('./configureReducer').default
      // $FlowFixMe
      store.replaceReducer(replaceReducer())
    })
  }

  return store
}

export default configureStore
