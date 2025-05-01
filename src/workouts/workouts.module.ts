/** npm imports */
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

/** local imports */
import { WorkoutsService } from './workouts.service'
import { WorkoutsController } from './workouts.controller'
import { Workout, WorkoutSchema } from './schemas/workout.schema'

/**
 * @description Workouts module that provides functionality for managing workouts.
 * - Contains the WorkoutsService that handles business logic related to workouts.
 * - Contains the WorkoutsController that handles HTTP requests related to workouts.
 * - Uses Mongoose for database interactions with the Workout model.
 * - Imports the MongooseModule to connect to the MongoDB database and define the Workout schema.
 * - Provides the WorkoutsService and WorkoutsController as part of the module.
 * - The module is responsible for managing the lifecycle of the service and controller.
 * - The module is imported into the main application module to make the workouts functionality available.
 * - The module is decorated with the @Module decorator, which defines the metadata for the module.
 * - The imports array contains the MongooseModule, which is used to define the schema for the Workout model.
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Workout.name, // The name of the model
        schema: WorkoutSchema, // The schema for the model
      },
    ]),
  ],
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}
