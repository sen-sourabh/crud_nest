import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { generateDatetimeOfMonthForward } from '../../../utils/datetime';
import { User } from '../../user/entities/user.entity';
import { Types } from 'mongoose';

@Schema({
  collection: 'auths',
  timestamps: true,
})
export class Auth {
  @ApiProperty({
    description: 'Key name of user',
    example: 'John',
  })
  @IsString({ message: 'Key name must be a string' })
  @Prop({
    required: true,
  })
  key_name: string;

  @ApiProperty({
    description: 'Id of the user',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'User Id must be a string/hexa string' })
  @Prop({
    required: true,
    ref: User.name,
  })
  user_id: Types.ObjectId;

  @ApiProperty({
    description: 'Api key of user',
    example: '',
  })
  @IsString({ message: 'Api key must be a string' })
  @Prop({
    required: true,
    unique: true,
  })
  api_key: string;

  @ApiPropertyOptional({
    description: 'Expiry date must be a default date + 30 days',
    example: '2023-07-29T06:00:54.567Z',
  })
  @IsDateString({}, { message: 'Expiry date must be a default date + 30 days' })
  @IsOptional()
  @Prop({
    required: false,
    default: generateDatetimeOfMonthForward(),
  })
  expiry: Date;

  @ApiPropertyOptional({
    description: 'Whether key is expired or not',
    example: 'false',
  })
  @IsBoolean({ message: 'Expired must be false by default' })
  @IsOptional()
  @Prop({
    required: false,
    default: false,
  })
  is_expired: boolean;

  @ApiPropertyOptional({
    description: 'Whether key is active or not',
    example: 'true',
  })
  @IsBoolean({ message: 'Active must be true by default' })
  @IsOptional()
  @Prop({
    required: false,
    default: true,
  })
  is_active?: boolean;

  @ApiPropertyOptional({
    description: 'Whether key is deleted or not',
    example: 'false',
  })
  @IsBoolean({ message: 'Delete must be false by default' })
  @IsOptional()
  @Prop({
    required: false,
    default: false,
  })
  is_deleted?: boolean;

  @ApiProperty({
    description: "User's IP address",
    example: '127.0.0.1',
  })
  @IsString({ message: 'IP address must be a string' })
  @Prop({
    required: true,
  })
  ip_address: string;

  @ApiProperty({
    description:
      'Current location of user seperated by Comma in City, State, Country format',
    example: 'Indore, Madhya Pradesh, India',
  })
  @IsString({
    message:
      'Current location of user seperated by Comma in City, State, Country format must be a string',
  })
  @Prop({
    required: true,
  })
  location: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
