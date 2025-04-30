/** npm imports */
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

/** local imports */
import { WorkoutsService } from './workouts.service'
import { WorkoutsController } from './workouts.controller'
import { Workout, WorkoutSchema } from './schemas/workout.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Workout.name, schema: WorkoutSchema }])],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}
