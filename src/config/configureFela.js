// @flow
import { createRenderer } from 'fela-native'
import extend from 'fela-plugin-extend'
import transformProperty from '../lib/felaTransformProperty'
import type { NativeRenderer } from 'fela'
import theme from '../theme/defaultTheme'

const colorProperties = [
  'color',
  'shadowColor',
  'backgroundColor',
  'borderColor',
  'borderTopColor',
  'borderRightColor',
  'borderBottomColor',
  'borderLeftColor',
  'textShadowColor',
  'textDecorationColor',
  'tintColor',
  'overlayColor',
]

const transformAllColorsProperties = () =>
  colorProperties.reduce(
    (accumulator, property) => ({
      ...accumulator,
      [property]: color => theme.colors[color] || color,
    }),
    {},
  )

const customPropertyPlugin = transformProperty({
  ...transformAllColorsProperties(),
  fontSize: size => theme.fontSizes[size] || size,
  fontWeight: weight => theme.fontWeights[weight] || weight,
  lineHeight: lineHeight => theme.lineHeights[lineHeight] || lineHeight,
})

const renderer: NativeRenderer = createRenderer({
  plugins: [extend(), customPropertyPlugin],
})

export default renderer
