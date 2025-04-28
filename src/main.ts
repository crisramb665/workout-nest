/** npm imports */
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

/** local imports */
import { AppModule } from './app.module'

const bootstrap = async (): Promise<void> => {
  try {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))

    const configService = app.get(ConfigService)
    const port = configService.get<number>('port') || 3000

    await app.listen(port)
    console.log(`Application is running on: http://localhost:${port}`)
  } catch (error) {
    console.error('Error during bootstrap:', error)
    process.exit(1)
  }
}
bootstrap()
