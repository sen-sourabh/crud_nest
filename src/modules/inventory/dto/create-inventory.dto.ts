import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBase64,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateInventoryDto {
  @ApiProperty({
    description:
      'Unique item id of item with the prefix of `IN_` followed by ISO Date string that generates dynamically',
    example: 'IN_1706347991940', //IN_new Date().getTime()
  })
  @IsString({ message: 'Item id must be a string' })
  readonly item_id: string;

  @ApiProperty({
    description: 'Name of the category',
    example: 'Hardware',
  })
  @IsString({ message: 'Name must be a string' })
  readonly name: string;

  @ApiProperty({
    description: 'Model number of the inventory',
    example: 'INQX_2314DEY', //IN_new Date().toISOString()
  })
  @IsString({ message: 'Model number must be a string' })
  @IsOptional()
  readonly model_number: string;

  @ApiProperty({
    description: 'Description of the inventory',
    example: 'about inventory...', //IN_new Date().toISOString()
  })
  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  readonly description?: string;

  @ApiProperty({
    description: 'Id of the category',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'Category id must be a string/hexa string' })
  readonly category_id: Types.ObjectId;

  @ApiProperty({
    description:
      'Valid positive quantity of the inventory that should be greater than 0 (> 0)',
    example: '76',
  })
  @IsNumber(
    { allowNaN: false, allowInfinity: true, maxDecimalPlaces: 0 },
    {
      message:
        'Quanity must be a valid positive number that should be greater than 0 (> 0)',
    },
  )
  readonly quantity: number;

  @ApiProperty({
    description: 'Image of the inventory',
    example: 'base64',
  })
  @IsBase64({ message: 'Image in binary' })
  @IsOptional()
  readonly image?: Buffer;

  @ApiProperty({
    description: 'image_url of the inventory',
    example: 'https://exmaple.com/image.png',
  })
  @IsString({ message: 'Image url must be a string' })
  @IsOptional()
  readonly image_url?: string;

  @ApiProperty({
    description: 'Id of the admin user',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'Admin user id must be a string/hexa string' })
  readonly added_by: Types.ObjectId;

  @ApiProperty({
    description: 'image_url of the inventory',
    example: 'https://exmaple.com/image.png',
  })
  @IsString({ message: 'Barcode must be a string' })
  @IsOptional()
  readonly barcode?: string;

  @ApiProperty({
    description: 'qrcode of the inventory',
    example: 'base64',
  })
  @IsBase64({ message: 'QRCode in binary' })
  @IsOptional()
  readonly qrcode?: Buffer;

  @ApiProperty({
    description: 'qrcode_url of the inventory',
    example: 'https://exmaple.com/qrcode_image.png',
  })
  @IsString({ message: 'QRCode url must be a string' })
  @IsOptional()
  readonly qrcode_url?: string;

  @ApiProperty({
    description: 'weight of the inventory in (grams)',
    example: '120 grams',
  })
  @IsString({ message: 'Weight (in grams) must be a string' })
  @IsOptional()
  readonly weight?: string;

  @ApiProperty({
    description: 'width of the inventory in (mm)',
    example: '120 mm',
  })
  @IsString({ message: 'Width (in millimeters) must be a string' })
  @IsOptional()
  readonly width?: string;

  @ApiProperty({
    description: 'height of the inventory in (mm)',
    example: '100 mm',
  })
  @IsString({ message: 'Height (in millimeters) must be a string' })
  @IsOptional()
  readonly height?: string;

  @ApiProperty({
    description: 'depth of the inventory in (mm)',
    example: '120 mm',
  })
  @IsString({ message: 'Depth (in millimeters) must be a string' })
  @IsOptional()
  readonly depth?: string;

  @ApiProperty({
    description:
      'Is refrigeration is needed for the inventory, false by default',
    example: 'false',
  })
  @IsBoolean({ message: 'Is refrigeration required must be a boolean' })
  @IsOptional()
  readonly is_refrigeration_required?: boolean;

  @ApiProperty({
    description:
      'Location of the inventory in the real world, like drawer, library',
    example: 'drawer',
  })
  @IsBoolean({ message: 'Inventory location must be a string' })
  @IsOptional()
  readonly inventory_location?: string;

  @ApiProperty({
    description: 'minimum_stock_level the inventory in number',
    example: '5',
  })
  @IsNumber(
    { allowNaN: false },
    { message: 'Minimum stock level must be a string' },
  )
  @IsOptional()
  readonly minimum_stock_level?: number;

  @ApiProperty({
    description: 'maximum_stock_level the inventory in number',
    example: '120',
  })
  @IsNumber(
    { allowNaN: false },
    { message: 'Maximum stock level must be a string' },
  )
  @IsOptional()
  readonly maximum_stock_level?: number;

  @ApiProperty({
    description: 'Whether inventory isInStock or not',
    example: 'true',
  })
  @IsBoolean({ message: 'Is inventory is in  stock must be a boolean' })
  @IsOptional()
  readonly is_in_stock?: boolean;

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
