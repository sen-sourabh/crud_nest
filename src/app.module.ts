import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessModule } from './modules/access/access.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { GeosModule } from './modules/geos/geos.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { MessengerModule } from './modules/messenger/messenger.module';
import { MessengerService } from './modules/messenger/messenger.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
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
export class AppModule {}
