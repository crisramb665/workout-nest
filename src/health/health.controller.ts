/** npm imports */
import { Controller, Get } from '@nestjs/common'

/**
 * @description Health check controller for the application.
 * - Provides a single endpoint to check the health status of the application.
 * - Returns a JSON response with the status and timestamp.
 * - Useful for monitoring and ensuring the application is running correctly.
 * - Can be used in load balancers or monitoring tools to check the application's health.
 * - The endpoint is accessible via GET request to /health.
 */
@Controller('health')
export class HealthController {
  @Get()
  getHealth(): { status: string; timestamp: string } {
    return { status: 'ok', timestamp: new Date().toISOString() }
  }
}
