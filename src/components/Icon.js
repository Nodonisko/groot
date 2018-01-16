// @flow
import * as React from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import icoMoonConfig from '../../assets/fontIcons/selection.json'
import type { Icon as IconType, Color, FontSize } from '../types'
import theme from '../theme/defaultTheme'

type IconPropsType = {
  name: IconType,
  color: Color,
  size: FontSize | number,
}

const defaultProps = {
  color: 'black',
  size: 'body',
}

const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig)

const Icon = ({ color, size, ...props }: IconPropsType) => (
  <CustomIcon
    color={theme.colors[color]}
    size={theme.fontSizes[size] || size}
    {...props}
  />
)

Icon.defaultProps = defaultProps

export default Icon
