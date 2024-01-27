import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsPhoneNumber, IsString } from 'class-validator';
import { UserType } from '../enums/user.enum';

export class GetUserDto {
  @ApiProperty({
    description: 'Id of the user',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'id must be a string/hexa string' })
  readonly _id?: string;

  @ApiProperty({
    description: 'First name of user',
    example: 'John',
  })
  @IsString({ message: 'First name must be a string' })
  first_name?: string;

  @ApiProperty({
    description: 'Last name of user',
    example: 'Doe',
  })
  @IsString({ message: 'Last name must be a string' })
  last_name?: string;

  @ApiProperty({
    description: 'Valid email of user',
    example: 'some@example.com',
  })
  @IsString({ message: 'Email must be a valid string' })
  email?: string;

  //   @ApiProperty({
  //     description: 'Valid password of user',
  //     example: 'Jhg$@87&Tywe',
  //   })
  //   @IsString({ message: 'Password must be a string' })
  //   password?: string;

  @ApiProperty({
    description: 'Valid 10 digit phone number of user',
    example: '1234567890',
  })
  @IsPhoneNumber(undefined, {
    message: 'Phone must be a valid 10 digit mobile number',
  })
  phone?: number;

  @ApiProperty({
    description: "User's photo",
    example: 'https://example.com/avatar.png',
  })
  @IsString({ message: 'URL must be valid image URL' })
  photo_url?: string;

  @ApiProperty({
    description: 'Type of user like: Consumer | Admin',
    example: 'Consumer',
  })
  @IsString({ message: 'user type must be a string' })
  user_type?: UserType;

  @ApiProperty({
    description: 'Whether user is active or not',
    example: 'true',
  })
  @IsBoolean({ message: 'Active must be true by default' })
  is_active?: boolean;

  @ApiProperty({
    description: 'Whether user is delete or not',
    example: 'false',
  })
  @IsBoolean({ message: 'Delete must be false by default' })
  is_deleted?: boolean;

  @ApiProperty({
    description: "User's IP address",
    example: '127.0.0.1',
  })
  @IsString({ message: 'IP address must be a string' })
  ip_address?: string;

  @ApiProperty({
    description:
      'Current location of user seperated by Comma in City, State, Country format',
    example: 'Indore, Madhya Pradesh, India',
  })
  @IsString({
    message:
      'Current location of user seperated by Comma in City, State, Country format must be a string',
  })
  location?: string;
}
