// @flow
import * as React from 'react'
import { Image as RNImage } from 'react-native'

const Image = (props: React.ElementProps<typeof RNImage>) => (
  <RNImage {...props} />
)

export default Image
