/** npm imports */
import { Body, Controller, Get, HttpCode, NotFoundException, Param, Post } from '@nestjs/common'

/** local imports */
import { type WorkoutData } from '../database/Workout'
import { WorkoutsService } from './workouts.service'
import { CreateNewWorkoutDto } from './create-new-workout.dto'

@Controller('v1/workouts')
export class WorkoutsController {
  private readonly workoutsService: WorkoutsService

  constructor(workoutsService: WorkoutsService) {
    this.workoutsService = workoutsService
  }

  @Get()
  getAllWorkouts(): WorkoutData[] {
    const workouts = this.workoutsService.getAllWorkouts()
    if (workouts.length === 0) throw new NotFoundException('No workouts found')

    return workouts
  }

  @Get(':workoutId')
  getOneWorkout(@Param('workoutId') workoutId: string) {
    const workout = this.workoutsService.getOneWorkout(workoutId)
    if (!workout) throw new NotFoundException(`Workout with id ${workoutId} not found`)

    return workout
  }

  @Post()
  @HttpCode(201)
  createNewWorkout(@Body() createNewWorkoutDto: CreateNewWorkoutDto) {
    const newWorkout = this.workoutsService.createNewWorkout(createNewWorkoutDto)

    if (!newWorkout) throw new NotFoundException('Error creating workout')

    return newWorkout
  }
}
