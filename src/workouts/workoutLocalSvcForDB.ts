/** npm imports */
import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

/** local imports */
import Workout from '../database/Workout'
import { type WorkoutData } from '../database/types'

/**
 * @description WorkoutsService class that provides methods to manage workouts.
 * - Uses the Workout model to interact with the database.
 * - Provides methods to get all workouts, get a specific workout, create a new workout,
 *  update an existing workout, and delete a workout.
 */
@Injectable()
export class WorkoutsService {
  getAllWorkouts(): WorkoutData[] {
    const getAllWorkouts = Workout.getAllWorkouts()
    return getAllWorkouts
  }

  getOneWorkout(workoutId: string): WorkoutData | undefined {
    const getOneWorkout = Workout.getOneWorkout(workoutId)
    return getOneWorkout
  }

  createNewWorkout(newWorkout: Omit<WorkoutData, 'id' | 'createdAt' | 'updatedAt'>): WorkoutData | undefined {
    const workoutToInsert = {
      ...newWorkout,
      id: uuidv4(),
      createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
      updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    }

    const createNewWorkout = Workout.createNewWorkout(workoutToInsert)
    return createNewWorkout
  }

  updateOneWorkout(workoutId: string, changes: any): WorkoutData | undefined {
    const updateOneWorkout = Workout.updateOneWorkout(workoutId, changes)
    return updateOneWorkout
  }

  deleteOneWorkout(workoutId: string): void {
    Workout.deleteOneWorkout(workoutId)
    return
  }
}
