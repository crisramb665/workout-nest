/** npm imports */
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

/** local imports */
import appConfig from './config/app.config'
import { WorkoutsModule } from './workouts/workouts.module'
import { HealthModule } from './health/health.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('databaseUrl'),
      }),
    }),
    HealthModule,
    WorkoutsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
