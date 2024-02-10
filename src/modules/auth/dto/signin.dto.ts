import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SignInWithEmailPasswordDto {
  @ApiProperty({
    description: 'Valid user email',
    example: 'some@example.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Valid user password',
    example: 'sRVTIV51Eg1mauX',
  })
  @IsString()
  password: string;
}

export class VerificationJWTTokenDto {
  @IsString()
  access_token: string;
}
