/** npm imports */
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'

/** local imports */
import { AppModule } from './app.module'

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule)

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
