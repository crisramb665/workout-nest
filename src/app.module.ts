/** npm imports */
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

/** local imports */
import appConfig from './config/app.config'
import databaseConfig from './config/database.config'
import { DatabaseModule } from './database/database.module'
import { WorkoutsModule } from './workouts/workouts.module'
import { HealthModule } from './health/health.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig, databaseConfig] }),
    DatabaseModule,
    HealthModule,
    WorkoutsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
