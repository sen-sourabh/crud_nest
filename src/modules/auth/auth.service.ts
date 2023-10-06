import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly userService: UserService,
  ) {}

  async generateJwtToken(user: User) {
    try {
      const payload = { sub: user._id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.log("Generate JWT TOKEN Error: ", error);
    }
  }

  async validateUserById(id: string): Promise<User | null> {
    try {
      // const user = await this.userService.findById(id);
      const user: any = [];
      return user;
    } catch (error) {
      return null; // Return null or handle the error as needed
    }
  }
}
