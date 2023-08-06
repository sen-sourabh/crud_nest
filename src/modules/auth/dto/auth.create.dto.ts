import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateAuthDto {
  @ApiProperty({
    description: 'Key name of user',
    example: 'John',
  })
  @IsString({ message: 'Key name must be a string' })
  readonly key_name: string;

  @ApiProperty({
    description: 'Id of the user',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'User Id must be a string/hexa string' })
  readonly user_id: Types.ObjectId;

  @ApiProperty({
    description: 'Api key of user',
    example: '',
  })
  @IsString({ message: 'Api key must be a string' })
  readonly api_key: string;

  @ApiPropertyOptional({
    description: 'Expiry date must be a default date + 30 days',
    example: '2023-07-29T06:00:54.567Z',
  })
  @IsDateString({}, { message: 'Expiry date must be a default date + 30 days' })
  @IsOptional()
  readonly expiry: Date;

  @ApiPropertyOptional({
    description: 'Whether key is expired or not',
    example: 'false',
  })
  @IsBoolean({ message: 'Expired must be false by default' })
  @IsOptional()
  readonly is_expired: boolean;

  @ApiPropertyOptional({
    description: 'Whether key is active or not',
    example: 'true',
  })
  @IsBoolean({ message: 'Active must be true by default' })
  @IsOptional()
  readonly is_active?: boolean;

  @ApiPropertyOptional({
    description: 'Whether key is deleted or not',
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
