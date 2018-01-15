// @flow
import { createRenderer } from 'fela-native'
import extend from 'fela-plugin-extend'
import transformProperty from '../lib/felaTransformProperty'
import type { NativeRenderer } from 'fela'
import logger from 'fela-logger'
import theme from '../theme/defaultTheme'

const customPropertyPlugin = transformProperty({
  fontSize: size => theme.fontSizes[size] || size,
  fontWeight: weight => theme.fontWeights[weight] || weight,
  color: color => theme.colors[color] || color,
  lineHeight: lineHeight => theme.lineHeights[lineHeight] || lineHeight,
})

const renderer: NativeRenderer = createRenderer({
  plugins: [extend(), customPropertyPlugin],
  enhancers: [logger()],
})

export default renderer
