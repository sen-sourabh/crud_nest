import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { FilterInventoryDto } from './dto/get-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(Inventory.name)
    private inventoryModel: mongoose.Model<Inventory>,
  ) {}

  getInventory(filter: FilterInventoryDto) {
    try {
      return this.inventoryModel.find(filter);
    } catch (error) {
      console.log('Get inventory error: ', error);
      return error;
    }
  }

  async create(createInventoryDto: CreateInventoryDto) {
    try {
      const result = await this.inventoryModel.create(createInventoryDto);
      return result;
    } catch (error) {
      console.log('Create inventory error: ', error);
      return error;
    }
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
