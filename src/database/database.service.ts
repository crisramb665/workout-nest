/** npm imports */
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { InjectConnection } from '@nestjs/mongoose'
import { Connection } from 'mongoose'

/**
 * @description Database service that manages the MongoDB connection.
 * - Implements OnModuleInit to handle connection events.
 * - Logs connection status and errors.
 * - Uses Mongoose for object data modeling (ODM).
 * - Injects the MongoDB connection using InjectConnection.
 * - Provides methods to handle connection events.
 * - Logs messages to indicate the status of the connection.
 * - Exits the application if there is a connection error.
 */
@Injectable()
export class DatabaseService implements OnModuleInit {
  /// Logger instance for logging messages
  private readonly logger = new Logger(DatabaseService.name)

  /// Injects the MongoDB connection using InjectConnection
  /// @param connection - The MongoDB connection instance
  constructor(@InjectConnection() private readonly connection: Connection) {}

  /// Called when the module is initialized
  /// - Sets up event listeners for the MongoDB connection
  /// - Logs messages to indicate the status of the connection
  /// - Exits the application if there is a connection error
  /// @returns {Promise<void>} - A promise that resolves when the module is initialized
  /// @throws {Error} - Throws an error if there is a connection error
  async onModuleInit() {
    this.logger.log('Initializing MongoDB connection...')
    this.connection.on('connected', () => {
      this.logger.log('MongoDB connection established successfully.')
    })

    this.connection.on('error', (error) => {
      this.logger.error('MongoDB connection error.', error)
      this.logger.error('shutting down the application.')
      process.exit(1)
    })
  }
}
