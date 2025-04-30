/** npm imports */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { v4 as uuidV4 } from 'uuid'

export type WorkoutDocument = Workout & Document
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

export const WorkoutSchema = SchemaFactory.createForClass(Workout)

WorkoutSchema.set('versionKey', false)
