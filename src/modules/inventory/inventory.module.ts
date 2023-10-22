import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventorySchema } from './entities/inventory.entity';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Inventory', schema: InventorySchema }])],
  providers: [InventoryService],
  controllers: [InventoryController]
})
export class InventoryModule {}
