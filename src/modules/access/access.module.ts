import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessController } from './access.controller';
import { AccessService } from './access.service';
import { AccessSchema } from './entities/access.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Access', schema: AccessSchema }]),
  ],
  controllers: [AccessController],
  providers: [AccessService],
})
export class AccessModule {}
