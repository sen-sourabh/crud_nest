import { Module } from '@nestjs/common';
import { AccessController } from './access.controller';
import { AccessSchema } from './entities/access.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessService } from './access.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Access', schema: AccessSchema }]),
  ],
  controllers: [AccessController],
  providers: [AccessService],
})
export class AccessModule {
  constructor() {
    console.log("Access Module");
  }
}
