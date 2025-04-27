/** npm imports */
import { Module } from '@nestjs/common'

/** local imports */
import { WorkoutsService } from './workouts.service'
import { WorkoutsController } from './workouts.controller'

@Module({
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}
