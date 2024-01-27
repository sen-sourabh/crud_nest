import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { SignInResponseWithEmailPasswordDto } from './dto/signin-response.dto';
import {
  SignInWithEmailPasswordDto,
  VerificationJWTTokenDto,
} from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, // private readonly userService: UserService,
    private readonly userService: UserService,
  ) {}

  async generateJwtToken(user: User) {
    try {
      const validUser = await this.validateUserById(user?._id);
      const payload = { sub: validUser?._id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.log('Generate JWT TOKEN Error: ', error);
      return error;
    }
  }

  async verifyJWTToken({ access_token }: VerificationJWTTokenDto) {
    try {
      const verified = this.jwtService.verify(access_token);
      console.log('verified: ', verified);
      return verified;
    } catch (error) {
      console.log('Verification JWT Token error: ', error);
      return error;
    }
  }

  async decodeJWTToken({ access_token }: VerificationJWTTokenDto) {
    try {
      const decoded = this.jwtService.decode(access_token);
      if (decoded?.sub) {
        return await this.userService.findById(decoded?.sub);
      }
      return decoded;
    } catch (error) {
      console.log('Decode JWT Token error: ', error);
      return error;
    }
  }

  async validateUserById(id: string): Promise<User> {
    try {
      const result = await this.userService.findById(id);
      if (result) {
        return result;
      }
      throw new NotFoundException('User Not Found');
    } catch (error) {
      console.log('Validate user error: ', error);
      return error; // Return null or handle the error as needed
    }
  }

  async signInWithEmailPassword(
    body: SignInWithEmailPasswordDto,
  ): Promise<SignInResponseWithEmailPasswordDto> {
    try {
      const validatedUser = await this.userService.getUserByEmailPassword(body);
      if (validatedUser?._id) {
        const token = await this.generateJwtToken(validatedUser);
        return {
          ...validatedUser.toObject(),
          ...token,
        };
      }
    } catch (error) {
      console.log('SignIn email or password error: ', error);
      return error;
    }
  }
}
