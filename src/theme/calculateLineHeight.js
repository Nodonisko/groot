// @flow

const goldenRation = 1.42857

const calculateLineHeight = (fontSize: number): number =>
  Math.ceil(goldenRation * fontSize)

export default calculateLineHeight
