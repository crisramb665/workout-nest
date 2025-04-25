import WorkoutDB from './db.json'
import { saveToDatabase } from './utils'

const getAllWorkouts = () => WorkoutDB.workouts

const getOneWorkout = (workoutId: string) => {
  const workout = WorkoutDB.workouts.find((workout) => workout.id === workoutId)

  if (!workout) return

  return workout
}

const createNewWorkout = (newWorkout: any) => {
  const isAlreadyAdded = WorkoutDB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1

  if (isAlreadyAdded) return

  WorkoutDB.workouts.push(newWorkout)
  saveToDatabase(WorkoutDB)

  return newWorkout
}

const updateOneWorkout = (workoutId: string, changes: any) => {
  const indexForUpdated = WorkoutDB.workouts.findIndex((workout) => workout.id === workoutId)

  if (indexForUpdated === -1) return

  const updatedWorkout = {
    ...WorkoutDB.workouts[indexForUpdated],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  }

  WorkoutDB.workouts[indexForUpdated] = updatedWorkout
  saveToDatabase(WorkoutDB)

  return updatedWorkout
}

const deleteOneWorkout = (workoutId: any) => {
  const indexForRemove = WorkoutDB.workouts.findIndex((workout) => workout.id === workoutId)

  if (indexForRemove === -1) return

  WorkoutDB.workouts.splice(indexForRemove, 1)
  saveToDatabase(WorkoutDB)
}

export default { getAllWorkouts, getOneWorkout, createNewWorkout, updateOneWorkout, deleteOneWorkout }
