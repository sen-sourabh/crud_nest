import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OTPRequestDto } from './dto/otp.dto';
import { MessengerService } from './messenger.service';

@ApiTags('Messenger')
@Controller('messenger')
export class MessengerController {
  constructor(private readonly messengerService: MessengerService) {}

  @Post('sendOtp')
  @ApiOperation({ summary: 'Will send email with OTP' })
  @ApiResponse({
    status: 200,
    description: 'OTP sent successfully',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Bad request body. Please try again.',
  })
  @HttpCode(200)
  async sendOTP(@Body() body: OTPRequestDto) {
    return await this.messengerService.sendOTP(body);
  }
}
