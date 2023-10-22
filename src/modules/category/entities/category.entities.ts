import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsBase64,
    IsBoolean,
    IsOptional,
    IsString
} from 'class-validator';
import { Document, Types } from 'mongoose';
import { User } from '../../user/entities/user.entity';

@Schema({
    collection: 'categories',
    timestamps: true,
})
export class Category extends Document {
    @ApiProperty({
        description: 'Name of the category',
        example: 'Hardware',
    })
    @IsString({ message: 'Name must be a string' })
    @Prop({
        required: true,
        type: 'string'
    })
    name: string;

    @ApiProperty({
        description: 'Description of the category',
        example: 'Sample description...',
    })
    @IsString({ message: 'Description must be a string' })
    @IsOptional()
    @Prop({
        required: false,
        type: 'string'
    })
    description: string;

    @ApiProperty({
        description: 'Id of the parent category',
        example: '64c4ab16336bcced427a125c',
    })
    @IsString({ message: 'Parent category id must be a string/hexa string' })
    @Prop({
        required: false,
        ref: Category.name,
    })
    parent_category_id: Types.ObjectId;

    @ApiProperty({
        description: 'Image of the category',
        example: 'base64',
    })
    @IsBase64({ message: 'Image in binary' })
    @IsOptional()
    @Prop({
        required: false,
        type: 'buffer'
    })
    image: Buffer;

    @ApiProperty({
        description: 'image_url of the category',
        example: 'https://exmaple.com/image.png',
    })
    @IsString({ message: 'Image url must be a string' })
    @IsOptional()
    @Prop({
        required: false,
        type: 'string'
    })
    image_url: string;

    @ApiProperty({
        description: 'Id of the admin user who adding the category',
        example: '64c4ab16336bcced427a125c',
    })
    @IsString({ message: 'Admin user id must be a string/hexa string' })
    @Prop({
        required: true,
        ref: User.name,
    })
    added_by: Types.ObjectId;

    @ApiPropertyOptional({
        description: 'Whether category is active or not',
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
        description: 'Whether category is delete or not',
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

export const CategorySchema = SchemaFactory.createForClass(Category);
