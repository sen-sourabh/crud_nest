import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserType } from '../enums/user.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User extends Document {
  @ApiProperty({
    description: 'First name of user',
    example: 'John',
  })
  @IsString({ message: 'First name must be a string' })
  @Prop({
    required: true,
  })
  first_name: string;

  @ApiProperty({
    description: 'Last name of user',
    example: 'Doe',
  })
  @IsString({ message: 'Last name must be a string' })
  @Prop({
    required: true,
  })
  last_name: string;

  @ApiProperty({
    description: 'Valid email of user',
    example: 'some@example.com',
  })
  @IsEmail({}, { message: 'Email must be a valid string' })
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @ApiProperty({
    description: 'Valid password of user',
    example: 'Jhg$@87&Tywe',
  })
  @IsString({ message: 'Password must be a string' })
  @Prop({
    required: false,
  })
  password: string;

  @ApiProperty({
    description: 'Valid 10 digit phone number of user',
    example: '1234567890',
  })
  @IsPhoneNumber(undefined, {
    message: 'Phone must be a valid 10 digit mobile number',
  })
  @Prop({
    required: false,
    type: 'number',
  })
  phone: number;

  @ApiPropertyOptional({
    description: "User's photo",
    example: 'https://example.com/avatar.png',
  })
  @IsString({ message: 'URL must be valid image URL' })
  @IsOptional()
  @Prop({
    required: false,
  })
  photo_url: string;

  @ApiPropertyOptional({
    description: 'Type of user like: Consumer | Admin',
    example: 'Consumer',
  })
  @IsString({ message: 'user type must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    default: UserType.Consumer,
  })
  user_type?: UserType;

  @ApiPropertyOptional({
    description: 'Whether user is active or not',
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
    description: 'Whether user is delete or not',
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

export const UserSchema = SchemaFactory.createForClass(User);
