/** npm imports */
import { IsString, IsOptional, IsUUID, IsDefined, IsArray, IsDateString } from 'class-validator'

export class CreateNewWorkoutDto {
  @IsOptional()
  @IsUUID()
  id?: string

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

  @IsOptional()
  @IsDateString()
  createdAt!: string

  @IsOptional()
  @IsDateString()
  updatedAt!: string

  @IsDefined()
  @IsArray()
  @IsString({ each: true })
  trainerTips!: string[]
}
