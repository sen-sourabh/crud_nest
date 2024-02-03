import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OTPDto {
  @ApiProperty({
    description: 'Name of receiver',
    example: 'Shishubh',
  })
  @IsString({ message: 'Name must be a string' })
  readonly name: string;

  @ApiProperty({
    description: 'OTP for receiver',
    example: '123456',
  })
  @IsString({ message: 'OTP must be a string' })
  readonly OTP: string;
}

export class OTPRequestDto {
  @ApiProperty({
    description: 'Email of receiver',
    example: 'sen.shishubh@gmail.com',
  })
  @IsString({ message: 'Name must be a string' })
  readonly to: string;

  @ApiProperty({
    description: 'Name of receiver',
    example: 'Shishubh',
  })
  @IsString({ message: 'Name must be a string' })
  readonly name: string;
}
