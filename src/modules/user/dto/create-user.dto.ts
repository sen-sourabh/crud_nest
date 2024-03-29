import { Prop } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { UserTypeEnum } from '../enums/user.enum';

export class CreateUserDto {
  @ApiProperty({
    description: 'First name of user',
    example: 'First',
  })
  @IsString({ message: 'first_name must be a string' })
  readonly first_name: string;

  @ApiProperty({
    description: 'Last name of user',
    example: 'Last',
  })
  @IsString({ message: 'last_name must be a string' })
  readonly last_name: string;

  @ApiProperty({
    description: 'Valid email of user',
    example: 'admin@example.com',
  })
  @IsEmail({}, { message: 'email must be a valid string' })
  readonly email: string;

  @ApiProperty({
    description: 'Valid password of user',
    example: 'Jhg$@87&Tywe',
  })
  @IsString({ message: 'password must be a string' })
  readonly password: string;

  @ApiProperty({
    description: 'Valid 10 digit phone number of user',
    example: '1234567890',
  })
  @IsPhoneNumber(undefined, {
    message: 'phone must be a valid 10 digit mobile number',
  })
  readonly phone: number;

  @ApiPropertyOptional({
    description: "User's photo",
    example:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  })
  @IsString({ message: 'photo_url must be valid image URL' })
  @IsOptional()
  readonly photo_url: string;

  @ApiPropertyOptional({
    description: 'Type of user like: Consumer | Admin',
    example: 'Consumer',
  })
  @IsString({ message: 'user_type must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    enum: UserTypeEnum,
    default: UserTypeEnum.Consumer,
    validate: {
      validator: (value: UserTypeEnum) => {
        return Object.values(UserTypeEnum).includes(value);
      },
      message: 'Invalid user type',
    },
  })
  readonly user_type?: string;

  @ApiPropertyOptional({
    description: 'Whether user is active or not',
    example: 'true',
  })
  @IsBoolean({ message: 'is_active must be a boolean' })
  @IsOptional()
  readonly is_active?: boolean;

  @ApiPropertyOptional({
    description: 'Whether user is delete or not',
    example: 'false',
  })
  @IsBoolean({ message: 'is_deleted must be  a boolean' })
  @IsOptional()
  readonly is_deleted?: boolean;

  @ApiProperty({
    description: "User's IP address",
    example: '127.0.0.1',
  })
  @IsString({ message: 'ip_address must be a string' })
  readonly ip_address: string;

  @ApiProperty({
    description:
      'Current location of user seperated by Comma in City, State, Country format',
    example: 'Indore, Madhya Pradesh, India',
  })
  @IsString({
    message:
      'location of user seperated by Comma in City, State, Country format must be a string',
  })
  readonly location: string;
}
