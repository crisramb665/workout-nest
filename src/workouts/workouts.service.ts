/** npm imports */
import { Injectable } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

/** local imports */
import Workout, { type WorkoutData } from '../database/Workout'

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

  createNewWorkout(newWorkout: WorkoutData): WorkoutData | undefined {
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
