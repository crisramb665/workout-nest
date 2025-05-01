/** npm imports */
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

/** local imports */
import { AppModule } from './app.module'

/**
 * @description Entry point of the NestJS application.
 * - Initializes the application.
 * - Sets up global validation using ValidationPipe.
 * - Loads configuration via ConfigService.
 * - Starts the server on the configured port.
 */
const bootstrap = async (): Promise<void> => {
  try {
    /** Create a new Nest application instance */
    /** @description The NestFactory is a static method that creates a new Nest application instance. */
    /** @description The create method takes the AppModule as an argument, which is the root module of the application. */
    const app = await NestFactory.create(AppModule)

    /** Enable global validation pipe to use DTO validation */
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // @description Only allow properties that are defined in the DTO
        forbidNonWhitelisted: true, // @description Throw an error if a property is not defined in the DTO
        transform: true, // @description Automatically transform payloads to DTO instances
      }),
    )

    /** Instance of ConfigService to be able to get env variables */
    const configService = app.get(ConfigService)
    /** Get the port from env variables */
    const port = configService.get<number>('port') || 3000

    /** Start the application and listen on the specified port */
    await app.listen(port)
    console.log(`Application is running on: http://localhost:${port}`)
  } catch (error) {
    console.error('Error during bootstrap:', error)
    process.exit(1)
  }
}
bootstrap()
