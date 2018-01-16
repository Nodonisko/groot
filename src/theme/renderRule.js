// @flow
import renderer from '../config/configureFela'
import type { Rule, Style } from '../types'

// eslint-disable-next-line
const renderRule: <T>(Rule<T>, T) => Style = renderer.renderRule

export default renderRule
