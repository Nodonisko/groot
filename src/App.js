// @flow
// must be class because of HMR
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react'
import ComponentShowcase from './components/ComponentShowcase'
import View from './components/View'
import renderRule from './theme/renderRule'

const styles = {
  container: () => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }),
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={renderRule(styles.container)}>
        <ComponentShowcase />
      </View>
    )
  }
}
