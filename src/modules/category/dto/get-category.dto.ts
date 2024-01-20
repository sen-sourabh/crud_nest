import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBase64, IsBoolean, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class GetCategoryDto {
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

  @ApiProperty({
    description: 'Description of the category',
    example: 'Sample description...',
  })
  @IsString({ message: 'Description must be a string' })
  readonly description?: string;

  @ApiProperty({
    description: 'Id of the parent category',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'Parent category id must be a string/hexa string' })
  readonly parent_category_id?: Types.ObjectId;

  @ApiProperty({
    description: 'Image of the category',
    example: 'base64',
  })
  @IsBase64({ message: 'Image in binary' })
  readonly image?: Buffer;

  @ApiProperty({
    description: 'image_url of the category',
    example: 'https://exmaple.com/image.png',
  })
  @IsString({ message: 'Image url must be a string' })
  readonly image_url?: string;

  @ApiProperty({
    description: 'Id of the admin user who adding the category',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'Admin user id must be a string/hexa string' })
  readonly added_by?: Types.ObjectId;

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
