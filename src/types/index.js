// @flow
// eslint-disable-next-line
import AnimatedNode from 'AnimatedNode'

export type TextAlign = 'auto' | 'left' | 'right' | 'center'
// Not sure if all these styles all supported in RN, feel free to remove some
export type FontWeightStyle =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

// Feel free to add more
export type Colors = {|
  black: string,
  red: string,
|}
export type Color = $Keys<Colors>

export type FontSizes = {|
  largeTitle: number,
  title1: number,
  title2: number,
  title3: number,
  headline: number,
  body: number,
  callout: number,
  subhead: number,
  footnote: number,
  caption1: number,
  caption2: number,
|}
export type FontSize = $Keys<FontSizes>

export type FontWeights = {|
  thin: FontWeightStyle,
  light: FontWeightStyle,
  regular: FontWeightStyle,
  semibold: FontWeightStyle,
  bold: FontWeightStyle,
|}
export type FontWeight = $Keys<FontWeights>

export type LineHeights = FontSizes
export type LineHeight = FontSize

export type Theme = {|
  colors: Colors,
  fontSizes: FontSizes,
  fontWeights: FontWeights,
  lineHeights: LineHeights,
|}

export type Dimension = null | number | string | AnimatedNode

export type Style = {|
  display?: 'none' | 'flex',
  width?: Dimension,
  height?: Dimension,
  top?: Dimension,
  bottom?: Dimension,
  left?: Dimension,
  right?: Dimension,
  minWidth?: Dimension,
  maxWidth?: Dimension,
  minHeight?: Dimension,
  maxHeight?: Dimension,
  margin?: Dimension,
  marginVertical?: Dimension,
  marginHorizontal?: Dimension,
  marginTop?: Dimension,
  marginBottom?: Dimension,
  marginLeft?: Dimension,
  marginRight?: Dimension,
  padding?: Dimension,
  paddingVertical?: Dimension,
  paddingHorizontal?: Dimension,
  paddingTop?: Dimension,
  paddingBottom?: Dimension,
  paddingLeft?: Dimension,
  paddingRight?: Dimension,
  borderWidth?: number,
  borderTopWidth?: number,
  borderBottomWidth?: number,
  borderLeftWidth?: number,
  borderRightWidth?: number,
  position?: 'absolute' | 'relative',
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  flexWrap?: 'wrap' | 'nowrap',
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline',
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around',
  overflow?: 'visible' | 'hidden' | 'scroll',
  flex?: number,
  flexGrow?: number,
  flexShrink?: number,
  flexBasis?: number | string,
  aspectRatio?: number,
  zIndex?: number,
  direction?: 'inherit' | 'ltr' | 'rtl',
  transform?: $ReadOnlyArray<
    | { perspective: number | AnimatedNode }
    | { rotate: string }
    | { rotateX: string }
    | { rotateY: string }
    | { rotateZ: string }
    | { scale: number | AnimatedNode }
    | { scaleX: number | AnimatedNode }
    | { scaleY: number | AnimatedNode }
    | { translateX: number | AnimatedNode }
    | { translateY: number | AnimatedNode }
    | {
        translate:
          | [number | AnimatedNode, number | AnimatedNode]
          | AnimatedNode,
      }
    | { skewX: string }
    | { skewY: string }
    // TODO: what is the actual type it expects?
    | { matrix: $ReadOnlyArray<number | AnimatedNode> | AnimatedNode },
  >,
  shadowColor?: string,
  shadowOffset?: {
    width?: number,
    height?: number,
  },
  shadowOpacity?: number | AnimatedNode,
  shadowRadius?: number,
  backfaceVisibility?: 'visible' | 'hidden',
  backgroundColor?: Color,
  borderColor?: Color,
  borderTopColor?: Color,
  borderRightColor?: Color,
  borderBottomColor?: Color,
  borderLeftColor?: Color,
  borderRadius?: number,
  borderTopLeftRadius?: number,
  borderTopRightRadius?: number,
  borderBottomLeftRadius?: number,
  borderBottomRightRadius?: number,
  borderStyle?: 'solid' | 'dotted' | 'dashed',
  borderWidth?: number,
  borderTopWidth?: number,
  borderRightWidth?: number,
  borderBottomWidth?: number,
  borderLeftWidth?: number,
  opacity?: number | AnimatedNode,
  elevation?: number,
  color?: Color,
  fontFamily?: string,
  fontSize?: FontSize,
  fontStyle?: 'normal' | 'italic',
  fontWeight?: FontWeight,
  fontVariant?: $ReadOnlyArray<
    | 'small-caps'
    | 'oldstyle-nums'
    | 'lining-nums'
    | 'tabular-nums'
    | 'proportional-nums',
  >,
  textShadowOffset?: { width?: number, height?: number },
  textShadowRadius?: number,
  textShadowColor?: Color,
  letterSpacing?: number,
  lineHeight?: LineHeight,
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify',
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center',
  includeFontPadding?: boolean,
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through',
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed',
  textDecorationColor?: Color,
  writingDirection?: 'auto' | 'ltr' | 'rtl',
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center' | 'repeat',
  tintColor?: Color,
  overlayColor?: string,
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center' | 'repeat',
  tintColor?: Color,
  overlayColor?: string,
  extend?: {|
    condition: boolean,
    style: ?Style,
  |},
|}
export type Rule<T> = T => Style
export type Styles = { [string]: Rule<*> }

export type Icon =
  | 'arrowLeft'
  | 'arrowRight'
  | 'avatar'
  | 'backspace'
  | 'eye'
  | 'refresh'
  | 'star'

// Redux models
// sadly we can use exact type for States because or flow bug
// https://github.com/facebook/flow/issues/2405
export type AppState = {
  foo: boolean,
  foo2: number,
}
export type AppAction = { type: 'SET_FOO', payload: { foo: boolean } }

export type State = {|
  app: AppState,
|}

export type Action = AppAction
