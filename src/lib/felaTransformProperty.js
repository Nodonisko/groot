/* @flow */
/* eslint-disable */
// Disabled only because this slightly editet version of fela-custom-property
import type { StyleType, DOMRenderer, NativeRenderer } from 'fela'

function isPlainObject(obj: any): boolean {
  return typeof obj === 'object' && !Array.isArray(obj)
}

function resolveTransformProperty(
  style: Object,
  properties: Object,
  renderer: NativeRenderer,
): Object {
  for (const property in style) {
    const value = style[property]

    if (properties.hasOwnProperty(property)) {
      style[property] = properties[property](value)
    }

    if (isPlainObject(value)) {
      style[property] = resolveTransformProperty(value, properties, renderer)
    }
  }

  return style
}

export default function transformProperty(properties: Object) {
  return (style: Object, type: StyleType, renderer: NativeRenderer) =>
    resolveTransformProperty(style, properties, renderer)
}
