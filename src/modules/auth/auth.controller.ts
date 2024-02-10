import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { SignInResponseWithEmailPasswordDto } from './dto/signin-response.dto';
import {
  SignInWithEmailPasswordDto,
  VerificationJWTTokenDto,
} from './dto/signin.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/generateToken')
  @ApiOperation({ summary: 'Generate an user token' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object with generated token of given user',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Token not generated. Please try again.',
  })
  @HttpCode(200)
  async generateToken(@Body() user: User) {
    return await this.authService.generateJwtToken(user);
  }

  @Post('/verifyJWTToken')
  @ApiOperation({ summary: 'Validate whether JWT token is expired or not' })
  @ApiResponse({
    status: 200,
    description: 'Validate whether JWT token is expired or not',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Please try with valid request',
  })
  @HttpCode(200)
  async verifyJWTToken(@Body() body: VerificationJWTTokenDto) {
    return await this.authService.verifyJWTToken(body);
  }

  @Post('/decodeJWTToken')
  @ApiOperation({
    summary: 'Decode and get JWT token information if token is not expired',
  })
  @ApiResponse({
    status: 200,
    description: 'Decode and get JWT token information if token is not expired',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Please try with valid request',
  })
  @HttpCode(200)
  async decodeJWTToken(@Body() body: VerificationJWTTokenDto) {
    return await this.authService.decodeJWTToken(body);
  }

  @Post('/signInWithEmailPassword')
  @ApiOperation({ summary: 'SignIn with email & password' })
  @ApiResponse({
    status: 200,
    description:
      'Returns user object with generated token where validate email & password',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Please try with valid email & password',
  })
  @ApiNotFoundResponse({
    status: 404,
    description:
      'Invalid email or password, Please try agian with valid credentials',
  })
  @HttpCode(200)
  async signin(
    @Body() body: SignInWithEmailPasswordDto,
  ): Promise<SignInResponseWithEmailPasswordDto> {
    return await this.authService.signInWithEmailPassword(body);
  }
}
