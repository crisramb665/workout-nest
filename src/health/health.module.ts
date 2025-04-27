/** npm imports */
import { Module } from '@nestjs/common'

/** local imports */
import { HealthController } from './health.controller'

@Module({
  controllers: [HealthController],
})
export class HealthModule {}
