import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBase64,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Document, Types } from 'mongoose';
import { Category } from '../../category/entities/category.entities';
import { User } from '../../user/entities/user.entity';

@Schema({
  collection: 'inventories',
  timestamps: true,
})
export class Inventory extends Document {
  @ApiProperty({
    description:
      'Unique item id of item with the prefix of `IN_` followed by ISO Date string that generates dynamically',
    example: 'IN_2023-10-15T15:22:29.820Z', //IN_new Date().toISOString()
  })
  @IsString({ message: 'Item id must be a string' })
  @Prop({
    required: true,
    type: 'string',
  })
  item_id: string;

  @ApiProperty({
    description: 'Name of the inventory',
    example: 'Keyboard', //IN_new Date().toISOString()
  })
  @IsString({ message: 'Name must be a string' })
  @Prop({
    required: true,
    type: 'string',
  })
  name: string;

  @ApiProperty({
    description: 'Model number of the inventory',
    example: 'INQX_2314DEY', //IN_new Date().toISOString()
  })
  @IsString({ message: 'Model number must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  model_number: string;

  @ApiProperty({
    description: 'Description of the inventory',
    example: 'about inventory...', //IN_new Date().toISOString()
  })
  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  description: string;

  @ApiProperty({
    description: 'Id of the category',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'Category id must be a string/hexa string' })
  @Prop({
    required: true,
    ref: Category.name,
  })
  category_id: Types.ObjectId;

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
  @IsOptional()
  @Prop({
    required: false,
    type: 'number',
    default: 0,
  })
  quantity: number;

  @ApiProperty({
    description: 'Image of the inventory',
    example: 'base64',
  })
  @IsBase64({ message: 'Image in binary' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'buffer',
  })
  image: Buffer;

  @ApiProperty({
    description: 'image_url of the inventory',
    example: 'https://exmaple.com/image.png',
  })
  @IsString({ message: 'Image url must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  image_url: string;

  @ApiProperty({
    description: 'Id of the admin user',
    example: '64c4ab16336bcced427a125c',
  })
  @IsString({ message: 'Admin user id must be a string/hexa string' })
  @Prop({
    required: true,
    ref: User.name,
  })
  added_by: Types.ObjectId;

  @ApiProperty({
    description: 'image_url of the inventory',
    example: 'https://exmaple.com/image.png',
  })
  @IsString({ message: 'Barcode must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  barcode: string;

  @ApiProperty({
    description: 'qrcode of the inventory',
    example: 'base64',
  })
  @IsBase64({ message: 'QRCode in binary' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'buffer',
  })
  qrcode: Buffer;

  @ApiProperty({
    description: 'qrcode_url of the inventory',
    example: 'https://exmaple.com/qrcode_image.png',
  })
  @IsString({ message: 'QRCode url must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  qrcode_url: string;

  @ApiProperty({
    description: 'weight of the inventory in (grams)',
    example: '120 grams',
  })
  @IsString({ message: 'Weight (in grams) must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  weight: string;

  @ApiProperty({
    description: 'width of the inventory in (mm)',
    example: '120 mm',
  })
  @IsString({ message: 'Width (in millimeters) must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  width: string;

  @ApiProperty({
    description: 'height of the inventory in (mm)',
    example: '100 mm',
  })
  @IsString({ message: 'Height (in millimeters) must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  height: string;

  @ApiProperty({
    description: 'depth of the inventory in (mm)',
    example: '120 mm',
  })
  @IsString({ message: 'Depth (in millimeters) must be a string' })
  @IsOptional()
  @Prop({
    required: false,
    type: 'string',
  })
  depth: string;

  @ApiProperty({
    description:
      'Is refrigeration is needed for the inventory, false by default',
    example: 'false',
  })
  @IsBoolean({ message: 'Is refrigeration required must be a boolean' })
  @IsOptional()
  @Prop({
    required: false,
    default: false,
  })
  is_refrigeration_required: boolean;

  @ApiProperty({
    description:
      'Location of the inventory in the real world, like drawer, library',
    example: 'drawer',
  })
  @IsBoolean({ message: 'Inventory location must be a string' })
  @IsOptional()
  @Prop({
    required: false,
  })
  inventory_location: string;

  @ApiProperty({
    description: 'minimum_stock_level the inventory in number',
    example: '5',
  })
  @IsNumber(
    { allowNaN: false },
    { message: 'Minimum stock level must be a string' },
  )
  @IsOptional()
  @Prop({
    required: false,
    type: 'number',
    default: 1,
    min: 1,
  })
  minimum_stock_level: number;

  @ApiProperty({
    description: 'maximum_stock_level the inventory in number',
    example: '120',
  })
  @IsNumber(
    { allowNaN: false },
    { message: 'Maximum stock level must be a string' },
  )
  @IsOptional()
  @Prop({
    required: false,
    type: 'number',
    default: 10000,
    min: 10,
  })
  maximum_stock_level: number;

  @ApiProperty({
    description: 'Whether inventory isInStock or not',
    example: 'true',
  })
  @IsBoolean({ message: 'Is inventory is in  stock must be a boolean' })
  @IsOptional()
  @Prop({
    required: false,
    default: true,
  })
  is_in_stock: boolean;

  @ApiPropertyOptional({
    description: 'Whether inventory is active or not',
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
    description: 'Whether inventory is delete or not',
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

export const InventorySchema = SchemaFactory.createForClass(Inventory);
