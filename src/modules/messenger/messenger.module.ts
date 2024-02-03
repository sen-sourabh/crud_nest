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
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Set to true for 465, false for other ports
        auth: {
          user: 'sourabhsen201313@gmail.com',
          pass: 'gure rwtu ubyu gttu',
        },
      },
      defaults: {
        from: '"no-reply" <sourabhsen201313@gmail.com>',
      },
      template: {
        dir: join(
          'C:/Users/soura/OneDrive/Documents/Projects/nest/backend/dist/modules/messenger',
          'templates',
        ),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MessengerService],
  controllers: [MessengerController],
})
export class MessengerModule {
  constructor() {
    console.log('__dirname: ', __dirname, ' | ', join(__dirname, 'templates'));
  }
}
