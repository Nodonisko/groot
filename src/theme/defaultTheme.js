// @flow
import type { Theme } from '../types'
import calculateLineHeight from './calculateLineHeight'

const fontSizes = {
  largeTitle: 34,
  title1: 28,
  title2: 22,
  title3: 20,
  headline: 17,
  body: 17,
  callout: 16,
  subhead: 15,
  footnote: 13,
  caption1: 12,
  caption2: 11,
}

const theme: Theme = {
  colors: {
    black: 'rgb(0, 0, 0)',
    red: 'rgb(255, 0, 0)',
  },
  fontSizes,
  lineHeights: {
    largeTitle: calculateLineHeight(fontSizes.largeTitle),
    title1: calculateLineHeight(fontSizes.title1),
    title2: calculateLineHeight(fontSizes.title2),
    title3: calculateLineHeight(fontSizes.title3),
    headline: calculateLineHeight(fontSizes.headline),
    body: calculateLineHeight(fontSizes.body),
    callout: calculateLineHeight(fontSizes.callout),
    subhead: calculateLineHeight(fontSizes.subhead),
    footnote: calculateLineHeight(fontSizes.footnote),
    caption1: calculateLineHeight(fontSizes.caption1),
    caption2: calculateLineHeight(fontSizes.caption2),
  },
  fontWeights: {
    thin: '200',
    light: '300',
    regular: '400',
    semibold: '500',
    bold: '600',
  },
}

export default theme
