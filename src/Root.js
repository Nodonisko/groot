// @flow
// must be class because of HMR
/* eslint-disable react/prefer-stateless-function */

import * as React from 'react'
import { Provider as FelaProvider, ThemeProvider } from 'react-fela'
import App from './App'
import renderer from './config/configureFela'
import defaultTheme from './theme/defaultTheme'
import { Provider as Redux } from 'react-redux'
import configureStore from './config/configureStore'

const store = configureStore()

class Root extends React.Component<*> {
  render() {
    return (
      <FelaProvider renderer={renderer}>
        <ThemeProvider theme={defaultTheme}>
          <Redux store={store}>
            <App />
          </Redux>
        </ThemeProvider>
      </FelaProvider>
    )
  }
}

export default Root
