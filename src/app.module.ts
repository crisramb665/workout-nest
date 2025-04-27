/** npm imports */
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

/** local imports */
import appConfig from './config/app.config'
import { WorkoutsModule } from './workouts/workouts.module'
import { HealthModule } from './health/health.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }), HealthModule, WorkoutsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
