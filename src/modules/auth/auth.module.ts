import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DEV } from '../../../dev';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: DEV.JWT_SECRET, // Replace with your secret key
      signOptions: { expiresIn: DEV.JWT_EXPIRE }, // Token expiration time
    }),
    PassportModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {
  constructor() {
    console.log('Auth Module');
  }
}
