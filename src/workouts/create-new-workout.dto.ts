/** npm imports */
import { IsString, IsOptional, IsUUID, IsDefined, IsArray } from 'class-validator'

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
