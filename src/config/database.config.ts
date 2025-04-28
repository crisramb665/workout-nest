/** npm imports */
import { registerAs } from '@nestjs/config'

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
