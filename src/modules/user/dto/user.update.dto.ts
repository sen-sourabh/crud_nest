import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserType } from '../enums/user.enum';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'First name of user',
    example: 'John',
  })
  @IsString({ message: 'First name must be a string' })
  readonly first_name: string;

  @ApiProperty({
    description: 'Last name of user',
    example: 'Doe',
  })
  @IsString({ message: 'Last name must be a string' })
  readonly last_name: string;

  @ApiProperty({
    description: 'Valid email of user',
    example: 'some@example.com',
  })
  @IsEmail({}, { message: 'Email must be a valid string' })
  readonly email: string;

  @ApiProperty({
    description: 'Valid password of user',
    example: 'Jhg$@87&Tywe',
  })
  @IsString({ message: 'Password must be a string' })
  readonly password: string;

  @ApiProperty({
    description: 'Valid 10 digit phone number of user',
    example: '1234567890',
  })
  @IsPhoneNumber(undefined, {
    message: 'Phone must be a valid 10 digit mobile number',
  })
  readonly phone: number;

  @ApiPropertyOptional({
    description: "User's photo",
    example: 'https://example.com/avatar.png',
  })
  @IsString({ message: 'URL must be valid image URL' })
  @IsOptional()
  readonly photo_url: string;

  @ApiPropertyOptional({
    description: 'Type of user like: Consumer | Admin',
    example: 'Consumer',
  })
  @IsString({ message: 'user type must be a string' })
  @IsOptional()
  readonly user_type?: UserType;

  @ApiPropertyOptional({
    description: 'Whether user is active or not',
    example: 'true',
  })
  @IsBoolean({ message: 'Active must be true by default' })
  @IsOptional()
  readonly is_active?: boolean;

  @ApiPropertyOptional({
    description: 'Whether user is delete or not',
    example: 'false',
  })
  @IsBoolean({ message: 'Delete must be false by default' })
  @IsOptional()
  readonly is_deleted?: boolean;

  @ApiProperty({
    description: "User's IP address",
    example: '127.0.0.1',
  })
  @IsString({ message: 'IP address must be a string' })
  readonly ip_address: string;

  @ApiProperty({
    description:
      'Current location of user seperated by Comma in City, State, Country format',
    example: 'Indore, Madhya Pradesh, India',
  })
  @IsString({
    message:
      'Current location of user seperated by Comma in City, State, Country format must be a string',
  })
  readonly location: string;
}
