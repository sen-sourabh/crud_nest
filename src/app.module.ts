import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DEV } from '../dev';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { AccessModule } from './modules/access/access.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { GeosModule } from './modules/geos/geos.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { UserModule } from './modules/user/user.module';
import { MessengerService } from './modules/messenger/messenger.service';
import { MessengerModule } from './modules/messenger/messenger.module';

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
    InventoryModule,
    CategoryModule,
    GeosModule,
    MessengerModule,
  ],
  providers: [MessengerService],
})
export class AppModule {
  constructor() {
    console.log('App Module');
  }

  configure(consumer: MiddlewareConsumer) {
    // Apply the LoggerMiddleware to all routes
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
