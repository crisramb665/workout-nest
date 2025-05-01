/** npm imports */
import { IsString, IsOptional, IsUUID, IsDefined, IsArray } from 'class-validator'

/**
 * @description DTO for creating a new workout.
 * - Contains properties for workout details such as name, mode, equipment, exercises, and trainer tips.
 * - Uses class-validator decorators to enforce validation rules on the properties.
 * - The _id property is optional and can be a UUID.
 * - The name, mode, equipment, exercises, and trainer tips are required fields.
 */
export class CreateNewWorkoutDto {
  @IsOptional()
  @IsUUID()
  _id?: string

  @IsDefined()
  @IsString()
  name!: string

  @IsDefined()
  @IsString()
  mode!: string

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  equipment!: string[]

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  exercises!: string[]

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  trainerTips!: string[]
}
