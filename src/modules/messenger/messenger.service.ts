import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { promises as fsPromises } from 'fs';
import { compile } from 'handlebars';
import { generateOTP } from '../../utils/function';
import { OTPDto, OTPRequestDto } from './dto/otp.dto';

@Injectable()
export class MessengerService {
  constructor(private readonly mailerService: MailerService) {}

  async sendOTP({ to, name }: OTPRequestDto) {
    try {
      const sentResponse: any = await this.mailerService.sendMail({
        to,
        from: process.env.SMTP_USERNAME,
        subject: 'OTP for login in NestJS',
        template: './otp',
        html: await this.compileHTMLToHandlebars('otp.hbs', {
          name,
          OTP: generateOTP(),
        }),
      });
      console.log('sentResponse: ', sentResponse);
      return sentResponse;
    } catch (error) {
      console.log('Send OTP error: ', error);
      return error;
    }
  }

  async compileHTMLToHandlebars(
    filename: string,
    content: OTPDto,
  ): Promise<string> {
    try {
      const html = await fsPromises.readFile(
        'C:/Users/soura/OneDrive/Documents/Projects/nest/backend/dist/modules/messenger' +
          `/templates/${filename}`,
        { encoding: 'utf-8' },
      );
      const template = compile(html);
      return template(content);
    } catch (error) {
      console.log('Error reading file', error);
      throw error;
    }
  }
}
