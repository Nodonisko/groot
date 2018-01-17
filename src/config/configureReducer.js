// @flow
import { combineReducers } from 'redux'
import type { State, Action } from '../types'
import app from '../reducers/app'

// stackoverflow.com/q/35622588/233902
const resetStateOnSignOutReducer = reducer => (
  state: State,
  action: Action,
) => {
  const userWasSignedOut = action.type === 'SIGN_OUT'
  if (!userWasSignedOut) {
    return reducer(state, action)
  }

  const stateWithSensitiveData = {
    app: state.app,
  }

  return reducer(stateWithSensitiveData, action)
}

const configureReducer = () => {
  const reducer = combineReducers({
    app,
  })

  return resetStateOnSignOutReducer(reducer)
}

export default configureReducer
