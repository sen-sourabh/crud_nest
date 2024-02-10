import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class GetInventoryDto {
  @ApiProperty({
    description: 'Id of the category',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'id must be a string/hexa string' })
  readonly id?: string;

  @ApiProperty({
    description: 'Name of the category',
    example: 'Hardware',
  })
  @IsString({ message: 'Name must be a string' })
  readonly name?: string;

  @ApiPropertyOptional({
    description: 'Whether user is active or not',
    example: 'true',
  })
  @IsBoolean({ message: 'is_active must be a boolean' })
  readonly is_active?: boolean;

  @ApiPropertyOptional({
    description: 'Whether user is delete or not',
    example: 'false',
  })
  @IsBoolean({ message: 'is_deleted must be  a boolean' })
  readonly is_deleted?: boolean;

  @ApiProperty({
    description: "User's IP address",
    example: '127.0.0.1',
  })
  @IsString({ message: 'ip_address must be a string' })
  readonly ip_address?: string;

  @ApiProperty({
    description:
      'Current location of user seperated by Comma in City, State, Country format',
    example: 'Indore, Madhya Pradesh, India',
  })
  @IsString({
    message:
      'location of user seperated by Comma in City, State, Country format must be a string',
  })
  readonly location?: string;
}

export class FilterInventoryDto {
  @ApiProperty({
    description: 'Id of the inventory',
  })
  @IsString({ message: 'id must be a string/hexa string' })
  @IsOptional()
  readonly id?: string;

  @ApiProperty({
    description: 'Name of the inventory',
  })
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  readonly name?: string;

  @ApiPropertyOptional({
    description: 'Whether user is active or not',
  })
  @IsBoolean({ message: 'is_active must be a boolean' })
  @IsOptional()
  readonly is_active?: boolean;

  @ApiPropertyOptional({
    description: 'Whether user is delete or not',
  })
  @IsBoolean({ message: 'is_deleted must be  a boolean' })
  @IsOptional()
  readonly is_deleted?: boolean;

  @ApiProperty({
    description: "User's IP address",
  })
  @IsString({ message: 'ip_address must be a string' })
  @IsOptional()
  readonly ip_address?: string;

  @ApiProperty({
    description:
      'Current location of user seperated by Comma in City, State, Country format',
  })
  @IsString({
    message:
      'location of user seperated by Comma in City, State, Country format must be a string',
  })
  @IsOptional()
  readonly location?: string;
}
