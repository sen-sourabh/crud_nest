import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MessengerController } from './messenger.controller';
import { MessengerService } from './messenger.service';

const tra = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'sourabhsen201313@gmail.com',
    pass: 'fztk nqqn dpbm ggjl',
  },
};
const tra1 = {
  host: process.env.SMTP_HOST,
  port: +process.env.SMTP_PORT,
  secure: Boolean(process.env.SMTP_SECURE), // Set to true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
};

@Module({
  imports: [
    MailerModule.forRoot({
      transport: tra,
      defaults: {
        from: process.env.SMTP_DEFAULTS,
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: Boolean(process.env.SMTP_OPTIONS_STRICT),
        },
      },
    }),
  ],
  providers: [MessengerService],
  controllers: [MessengerController],
})
export class MessengerModule {}
