import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Access } from './entities/access.entity';
import { CreateAccessDto } from './dto/access.create.dto';
import { generateApiKey } from '../../utils/access';

@Injectable()
export class AccessService {
  constructor(
    @InjectModel(Access.name)
    private accessModel: mongoose.Model<Access>,
  ) {}

  async findAll(): Promise<Access[]> {
    const result = await this.accessModel.find();
    return result;
  }

  async findById(id: string): Promise<Access> {
    const result = await this.accessModel.findById(id);
    if (!result) throw new NotFoundException();
    return result;
  }

  async findAllByUser(id: string): Promise<Access[]> {
    const result = await this.accessModel.find({ user_id: id });
    if (result.length == 0) throw new NotFoundException();
    return result;
  }

  async create(access: CreateAccessDto): Promise<Access> {
    const newaccess = {
      ...access,
      api_key: generateApiKey(),
    };
    const result = await this.accessModel.create(newaccess);
    return result;
  }
}
