import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';

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
  generateToken(@Body() user: User) {
    return this.authService.generateJwtToken(user);
  }
}
