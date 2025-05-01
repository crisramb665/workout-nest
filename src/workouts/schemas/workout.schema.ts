/** npm imports */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { v4 as uuidV4 } from 'uuid'

/**
 * @description WorkoutDocument type that extends Mongoose Document.
 * - Represents a workout document in the MongoDB database.
 * - Contains properties defined in the Workout schema.
 * - Used for type safety and autocompletion in TypeScript.
 */
export type WorkoutDocument = Workout & Document

/**
 * @description Workout schema for MongoDB.
 * - Represents a workout with various properties such as name, mode, equipment, exercises, and trainer tips.
 * - Uses UUID for unique identification.
 * - Timestamps are enabled to track creation and update times.
 * - Exports the schema for use in the application.
 */
@Schema({ timestamps: true })
export class Workout extends Document {
  @Prop({ default: uuidV4 })
  _id: string

  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  mode: string

  @Prop({ required: true, type: [String] })
  equipment: string[]

  @Prop({ required: true, type: [String] })
  exercises: string[]

  @Prop({ required: true, type: [String] })
  trainerTips: string[]

  @Prop()
  createdAt: Date

  @Prop()
  updatedAt: Date
}

/**
 * @description Workout schema factory for creating the Mongoose schema.
 * - Uses the Workout class to define the schema structure.
 * - Exports the schema for use in the application.
 */
export const WorkoutSchema = SchemaFactory.createForClass(Workout)

/**
 * @description Sets the version key to false to avoid Mongoose adding a __v field to the documents.
 * - This is useful for cleaner data representation and avoiding unnecessary fields in the database.
 */
WorkoutSchema.set('versionKey', false)
