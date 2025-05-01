/** npm imports */
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

/** local imports */
import appConfig from './config/app.config'
import databaseConfig from './config/database.config'
import { DatabaseModule } from './database/database.module'
import { WorkoutsModule } from './workouts/workouts.module'
import { HealthModule } from './health/health.module'

/**
 * @description Main application module that sets up global configuration,
 * database connection, and feature modules like health checks and workouts.
 * 
 * - Loads environment variables globally via ConfigModule.
 * - Connects to the MongoDB database using a custom DatabaseModule.
 * - Registers HealthModule for health check routes.
 * - Registers WorkoutsModule for workout-related API routes.
 */
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
