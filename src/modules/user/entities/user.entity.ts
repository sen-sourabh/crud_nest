import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { UserType } from '../enums/user.enum';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  timestamps: true,
})
export class User {
  // @Prop({ required: true })
  @ApiProperty()
  first_name: string;

  // @Prop({ required: true })
  @ApiProperty()
  last_name: string;

  // @Prop({ unique: true, required: true })
  @ApiProperty()
  email: string;

  // @Prop({ required: true })
  @ApiProperty()
  password: string;

  // @Prop({ unique: true, required: true })
  @ApiProperty()
  phone: number;

  // @Prop({ enum: UserType, default: UserType.Consumer })
  @ApiProperty()
  user_type: UserType;

  // @Prop({ default: 1 })
  @ApiProperty()
  is_active: boolean;

  // @Prop({ default: 0 })
  @ApiProperty()
  is_deleted: boolean;

  // @Prop({ required: true })
  @ApiProperty()
  ip_address: string;

  // @Prop({ required: true })
  @ApiProperty()
  location: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
