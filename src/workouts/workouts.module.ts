/** npm imports */
import { Module } from '@nestjs/common'

/** local imports */
import { WorkoutsService } from './workouts.service'

@Module({
  controllers: [],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}
