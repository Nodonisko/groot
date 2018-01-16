// @flow

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

export type Style = {|
  backfaceVisibility?: 'visible' | 'hidden',
  backgroundColor?: string,
  borderBottomColor?: string,
  borderBottomLeftRadius?: number,
  borderBottomRightRadius?: number,
  borderBottomWidth?: number,
  borderColor?: string,
  borderLeftColor?: string,
  borderRadius?: number,
  borderRightColor?: string,
  borderRightWidth?: number,
  borderStyle?: 'solid' | 'dotted' | 'dashed',
  borderTopColor?: string,
  borderTopLeftRadius?: number,
  borderTopRightRadius?: number,
  borderTopWidth?: number,
  opacity?: number,
  overflow?: 'visible' | 'hidden',
  shadowColor?: string,
  shadowOffset?: { width: number, height: number },
  shadowOpacity?: number,
  shadowRadius?: number,
  elevation?: number,
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch',
  borderBottomWidth?: number,
  borderLeftWidth?: number,
  borderRightWidth?: number,
  borderTopWidth?: number,
  borderWidth?: number,
  bottom?: number,
  flex?: number,
  flexGrow?: number,
  flexShrink?: number,
  flexBasis?: number,
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
  flexWrap?: 'wrap' | 'nowrap',
  height?: number,
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around',
  left?: number,
  minWidth?: number,
  maxWidth?: number,
  minHeight?: number,
  maxHeight?: number,
  margin?: number,
  marginBottom?: number,
  marginHorizontal?: number,
  marginLeft?: number,
  marginRight?: number,
  marginTop?: number,
  marginVertical?: number,
  overflow?: 'visible' | 'hidden' | 'scroll',
  padding?: number,
  paddingBottom?: number,
  paddingHorizontal?: number,
  paddingLeft?: number,
  paddingRight?: number,
  paddingTop?: number,
  paddingVertical?: number,
  position?: 'absolute' | 'relative',
  right?: number,
  top?: number,
  width?: number,
  zIndex?: number,
  transform?: any[],
  transformMatrix?: Array<number>,
  rotation?: number,
  scaleX?: number,
  scaleY?: number,
  translateX?: number,
  translateY?: number,
  color?: string | Color,
  fontFamily?: string,
  fontSize?: number | FontSize,
  fontStyle?: 'normal' | 'italic',
  fontWeight?: FontWeightStyle | FontWeight,
  letterSpacing?: number,
  lineHeight?: number | LineHeight,
  textAlign?: TextAlign,
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through',
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed',
  textDecorationColor?: string,
  textShadowColor?: string,
  textShadowOffset?: { width: number, height: number },
  textShadowRadius?: number,
  letterSpacing?: number,
  textDecorationColor?: string,
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed',
  writingDirection?: 'auto' | 'ltr' | 'rtl',
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center',
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
