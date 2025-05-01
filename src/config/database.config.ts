/** npm imports */
import { registerAs } from '@nestjs/config'

/**
 * @description Configuration for MongoDB connection.
 * - Uses environment variables to set the MongoDB URI based on the environment (production, staging, development).
 * - Exports a function that returns the configuration object.
 */
export default registerAs('database', () => {
  const env = process.env.NODE_ENV || 'development'

  if (env === 'production') {
    return {
      url: process.env.MONGODB_URI_PROD,
    }
  } else if (env === 'staging') {
    return {
      url: process.env.MONGODB_URI_STAGING,
    }
  } else {
    return {
      url: process.env.MONGODB_URI_DEV,
    }
  }
})
