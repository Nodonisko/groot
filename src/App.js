// @flow
// must be class because of HMR
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react'
import ComponentShowcase from './components/ComponentShowcase'
import View from './components/View'
import renderRule from './theme/renderRule'
import Icon from './components/Icon'
import Text from './components/Text'

const styles = {
  container: () => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }),
  text: () => ({
    color: 'red',
    paddingTop: 50,
  }),
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={renderRule(styles.container)}>
        <ComponentShowcase />
        <Text style={renderRule(styles.text)}>Hello world</Text>
        <Icon name="backspace" size={50} />
      </View>
    )
  }
}
