import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DEV } from '../dev';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { AccessModule } from './modules/access/access.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(DEV.DB_URI),
    AuthModule,
    UserModule,
    AccessModule,
  ],
})
export class AppModule {
  constructor() {
    console.log("App Module");
  }

  configure(consumer: MiddlewareConsumer) {
    // Apply the LoggerMiddleware to all routes
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
