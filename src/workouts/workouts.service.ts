/** npm imports */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

/** local imports */
import { type WorkoutData } from '../database/types'
import Workout from '../database/Workout'
import { WorkoutDocument, Workout as WorkoutSchemaClass } from './schemas/workout.schema'
import { CreateNewWorkoutDto } from './create-new-workout.dto'

@Injectable()
export class WorkoutsService {
  constructor(@InjectModel(WorkoutSchemaClass.name) private workoutModel: Model<WorkoutDocument>) {}

  async getAllWorkouts(): Promise<WorkoutDocument[]> {
    return this.workoutModel.find().exec()
  }

  async getOneWorkout(workoutId: string): Promise<WorkoutDocument | null> {
    console.log({ workoutId })
    return this.workoutModel.findOne({ _id: workoutId }).exec()
  }

  async createNewWorkout(createNewWorkoutDto: CreateNewWorkoutDto): Promise<WorkoutDocument> {
    const createdWorkout = new this.workoutModel(createNewWorkoutDto)
    return createdWorkout.save()
  }

  async updateOneWorkout(workoutId: string, changes: Partial<CreateNewWorkoutDto>): Promise<WorkoutDocument | null> {
    const updatedWorkout = this.workoutModel.findByIdAndUpdate({ _id: workoutId }, changes).exec()
    return updatedWorkout
  }

  async deleteOneWorkout(workoutId: string): Promise<void> {
    this.workoutModel.deleteOne({ _id: workoutId }).exec()
    return
  }
}
