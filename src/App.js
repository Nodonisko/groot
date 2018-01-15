// @flow
// must be class because of HMR
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react'
import { Platform, View } from 'react-native'
import Text from './components/Text'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu', // eslint-disable-line
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text color="red" size="largeTitle" align="center">
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}
