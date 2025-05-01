/** npm imports */
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'

/** local imports */
import { DatabaseService } from './database.service'

/**
 * @description Database module that handles the connection to MongoDB.
 * - Uses Mongoose for object data modeling (ODM).
 * - Loads database configuration from environment variables using ConfigModule.
 * - Provides a DatabaseService for database-related operations.
 */
@Module({
  imports: [
    ConfigModule, // Import ConfigModule to access environment variables
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to access environment variables
      inject: [ConfigService], // Inject ConfigService to access environment variables
      useFactory: (configService: ConfigService) => ({
        // Factory function to create the Mongoose connection
        uri: configService.get<string>('database.url'),
      }),
    }),
  ],
  providers: [DatabaseService], // Register DatabaseService as a provider
})
export class DatabaseModule {}
