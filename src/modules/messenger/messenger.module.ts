import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MessengerController } from './messenger.controller';
import { MessengerService } from './messenger.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT,
        secure: Boolean(process.env.SMTP_SECURE), // Set to true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      defaults: {
        from: process.env.SMTP_DEFAULTS,
      },
      template: {
        dir: join(
          'C:/Users/soura/OneDrive/Documents/Projects/nest/backend/dist/modules/messenger',
          'templates',
        ),
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
export class MessengerModule {
  constructor() {
    // console.log('__dirname: ', __dirname, ' | ', join(__dirname, 'templates'));
  }
}
