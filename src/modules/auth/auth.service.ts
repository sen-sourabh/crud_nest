import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';

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

  async validateUserById(id: string): Promise<User | null> {
    try {
      const user = await this.userService.findById(id);
      if (!user) {
        throw new NotFoundException('Invalid user');
      }
      return user;
    } catch (error) {
      console.log('Validate user error: ', error);
      return error; // Return null or handle the error as needed
    }
  }
}
