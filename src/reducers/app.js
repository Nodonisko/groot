// @flow
import type { AppAction, AppState } from '../types'

const initialState: AppState = {
  foo: true,
  foo2: 2,
  foo3: 2,
}

const reducer = (
  state: AppState = initialState,
  action: AppAction,
): AppState => {
  switch (action.type) {
    case 'SET_FOO':
      return { ...state, foo: action.payload.foo }

    default:
      return state
  }
}

export default reducer
