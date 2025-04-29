/** npm imports */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Workout extends Document {
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

  @Prop({ default: Date.now })
  createdAt: string

  @Prop({ default: Date.now })
  updatedAt: string
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout)
