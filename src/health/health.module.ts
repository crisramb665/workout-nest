/** npm imports */
import { Module } from '@nestjs/common'

/** local imports */
import { HealthController } from './health.controller'

/**
 * @description Health module that provides a health check endpoint.
 * - Contains the HealthController that handles the health check route.
 * - Useful for monitoring the application's status.
 */
@Module({
  controllers: [HealthController],
})
export class HealthModule {}
