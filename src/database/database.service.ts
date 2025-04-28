/** npm imports */
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { InjectConnection } from '@nestjs/mongoose'
import { Connection } from 'mongoose'

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name)

  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
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
