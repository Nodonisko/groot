// @flow
import * as React from 'react'
import { Text as RNText } from 'react-native'
import renderRule from '../theme/renderRule'
import type {
  Style,
  Color,
  TextAlign,
  FontSize,
  FontWeight,
  LineHeight,
} from '../types'
import R from 'ramda'

type TextPropsType = {|
  children: string | React.Node,
  style?: Style,
  color?: Color,
  size?: FontSize,
  weight?: FontWeight,
  lineHeight?: LineHeight,
  align?: TextAlign,
|}

const defaultProps = {
  color: 'black',
  size: 'body',
  weight: 'regular',
  align: 'auto',
}

const styles = {
  text: ({ color, size, weight, lineHeight, align, style }: TextPropsType) => ({
    color,
    fontSize: size,
    fontWeight: weight,
    lineHeight: lineHeight || size,
    textAlign: align,
    extend: {
      condition: !R.isNil(style),
      style,
    },
  }),
}

const Text = (props: TextPropsType) => (
  <RNText style={renderRule(styles.text, props)}>{props.children}</RNText>
)

Text.defaultProps = defaultProps

export default Text
