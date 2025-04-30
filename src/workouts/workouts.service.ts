/** npm imports */
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

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
  // getAllWorkouts(): WorkoutData[] {
  //   const getAllWorkouts = Workout.getAllWorkouts()
  //   return getAllWorkouts
  // }

  // getOneWorkout(workoutId: string): WorkoutData | undefined {
  //   const getOneWorkout = Workout.getOneWorkout(workoutId)
  //   return getOneWorkout
  // }

  async createNewWorkout(createNewWorkoutDto: CreateNewWorkoutDto): Promise<WorkoutDocument> {
    const createdWorkout = new this.workoutModel(createNewWorkoutDto)
    return createdWorkout.save()
  }
  // createNewWorkout(newWorkout: Omit<WorkoutData, 'id' | 'createdAt' | 'updatedAt'>): WorkoutData | undefined {
  //   const workoutToInsert = {
  //     ...newWorkout,
  //     id: uuidv4(),
  //     createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  //     updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  //   }

  //   const createNewWorkout = Workout.createNewWorkout(workoutToInsert)
  //   return createNewWorkout
  // }

  // updateOneWorkout(workoutId: string, changes: any): WorkoutData | undefined {
  //   const updateOneWorkout = Workout.updateOneWorkout(workoutId, changes)
  //   return updateOneWorkout
  // }

  // deleteOneWorkout(workoutId: string): void {
  //   Workout.deleteOneWorkout(workoutId)
  //   return
  // }
}
