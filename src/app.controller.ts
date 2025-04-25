import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('¡Hola desde el controlador!')
    return this.appService.getHello()
  }

  @Get('health')
  getHealth(): string {
    return 'workout service ok'
  }
}
