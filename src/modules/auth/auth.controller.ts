import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../user/entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Generate an user token' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object with generated token of given user',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Token not generated. Please try again.',
  })
  async generateToken(@Body() user: User) {
    const result = this.authService.generateJwtToken(user);
    return result;
  }
}
