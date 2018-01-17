// @flow
import { createLogger as createLoggerMiddleware } from 'redux-logger'

const configureMiddleware = () => {
  const middleware = []

  const enableLogger = __DEV__

  // Logger must be the last middleware in chain!!!
  if (enableLogger) {
    const logger = createLoggerMiddleware({
      collapsed: true,
    })
    // eslint-disable-next-line
    middleware.push(logger)
  }

  return middleware
}

export default configureMiddleware
