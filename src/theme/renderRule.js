// @flow
import renderer from '../config/configureFela'
import type { Rule, Styles } from '../types'

// eslint-disable-next-line
const renderRule: <T>(Rule<T>, T) => Styles = renderer.renderRule

export default renderRule
