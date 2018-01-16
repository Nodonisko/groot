// @flow
import 'react-native'
import React from 'react'
import Image from '../Image'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly with only required props', () => {
  const component = <Image />
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})
