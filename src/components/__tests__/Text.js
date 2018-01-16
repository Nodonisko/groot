// @flow
import 'react-native'
import React from 'react'
import Text from '../Text'
import renderRule from '../../theme/renderRule'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly with only required props', () => {
  const component = <Text>Hello world</Text>
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with color prop', () => {
  const component = <Text color="red">Hello world</Text>
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with font size prop', () => {
  const component = <Text size="title1">Hello world</Text>
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with font size prop and line height prop', () => {
  const component = (
    <Text size="title1" lineHeight="largeTitle">
      Hello world
    </Text>
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with font weight props', () => {
  const component = <Text weight="bold">Hello world</Text>
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with font align props', () => {
  const component = <Text align="center">Hello world</Text>
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with custom style props', () => {
  const style = () => ({ fontSize: 'title1', paddingLeft: 20, color: 'red' })
  const component = <Text style={renderRule(style)}>Hello world</Text>
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with all possible props', () => {
  const style = () => ({ fontSize: 'title2', paddingLeft: 20 })
  const component = (
    <Text
      color="red"
      size="title1"
      lineHeight="largeTitle"
      weight="bold"
      align="center"
      style={renderRule(style)}
    >
      Hello world
    </Text>
  )
  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})
