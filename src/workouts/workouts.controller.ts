/** npm imports */
import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post } from '@nestjs/common'

/** local imports */
import { type WorkoutData } from '../database/types'
import { WorkoutsService } from './workouts.service'
import { CreateNewWorkoutDto } from './create-new-workout.dto'
import { WorkoutDocument } from './schemas/workout.schema'

/**
 * @description WorkoutsController class that handles HTTP requests related to workouts.
 * - Provides endpoints to get all workouts, get a specific workout, create a new workout,
 * update an existing workout, and delete a workout.
 * - Uses the WorkoutsService to interact with the database.
 * - Uses DTOs (Data Transfer Objects) to validate and transform incoming request data.
 * - Uses decorators from NestJS to define routes and handle HTTP methods.
 * - Uses exception handling to return appropriate HTTP responses for errors.
 */
@Controller('v1/workouts') // Base route for all workout-related endpoints
// The 'v1' prefix indicates that this is version 1 of the API
// This allows for versioning of the API in the future.
export class WorkoutsController {
  private readonly workoutsService: WorkoutsService

  constructor(workoutsService: WorkoutsService) {
    this.workoutsService = workoutsService
  }

  @Get()
  async getAllWorkouts(): Promise<WorkoutDocument[]> {
    const workouts = await this.workoutsService.getAllWorkouts()
    if (workouts.length === 0) throw new NotFoundException('No workouts found')

    return workouts
  }

  // Get a specific workout by its ID
  // The workoutId parameter is extracted from the URL using the @Param decorator
  // The workoutId is passed to the getOneWorkout method of the WorkoutsService
  // If the workout is not found, a NotFoundException is thrown
  // The workout is returned as a response
  @Get(':workoutId')
  getOneWorkout(@Param('workoutId') workoutId: string) {
    const workout = this.workoutsService.getOneWorkout(workoutId)
    if (!workout) throw new NotFoundException(`Workout with id ${workoutId} not found`)

    return workout
  }

  // Create a new workout
  // The request body is validated and transformed using the CreateNewWorkoutDto class
  // The createNewWorkout method of the WorkoutsService is called to create the new workout
  // If the workout is not created successfully, a NotFoundException is thrown
  // The new workout is returned as a response with a 201 Created status code
  // The @HttpCode(201) decorator sets the response status code to 201 Created
  // The @Body decorator extracts the request body and validates it using the CreateNewWorkoutDto class
  // The CreateNewWorkoutDto class is a Data Transfer Object (DTO) that defines the structure of the request body
  @Post()
  @HttpCode(201)
  createNewWorkout(@Body() createNewWorkoutDto: CreateNewWorkoutDto) {
    const newWorkout = this.workoutsService.createNewWorkout(createNewWorkoutDto)

    // If the new workout is not created successfully, throw a NotFoundException
    // This exception will be caught by the global exception filter and return a 404 Not Found response
    if (!newWorkout) throw new NotFoundException('Error creating workout')

    return newWorkout
  }

  @Patch(':workoutId')
  updateOneWorkout(@Param('workoutId') workoutId: string, @Body() changes: Partial<CreateNewWorkoutDto>) {
    const workout = this.workoutsService.getOneWorkout(workoutId)

    if (!workout) throw new NotFoundException(`Workout with id ${workoutId} not found`)
    const updatedWorkout = this.workoutsService.updateOneWorkout(workoutId, changes)

    return updatedWorkout
  }

  @Delete(':workoutId')
  deleteOneWorkout(@Param('workoutId') workoutId: string) {
    const workout = this.workoutsService.getOneWorkout(workoutId)
    if (!workout) throw new NotFoundException(`Workout with id ${workoutId} not found`)

    this.workoutsService.deleteOneWorkout(workoutId)

    return { message: `Workout with id ${workoutId} deleted successfully` }
  }
}
