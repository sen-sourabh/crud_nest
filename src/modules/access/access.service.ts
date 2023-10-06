import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { generateApiKey } from '../../utils/access';
import { stringToObjectId } from '../../utils/function';
import { CreateAccessDto } from './dto/access.create.dto';
import { Access } from './entities/access.entity';

@Injectable()
export class AccessService {
  constructor(
    @InjectModel(Access.name)
    private accessModel: mongoose.Model<Access>,
  ) {}

  async findAll(): Promise<Access[]> {
    try {
      const result = await this.accessModel.find();
      return result;
    } catch (error) {
      console.log("Access FindAll Error: ", error);
    }
  }

  async findById(id: string): Promise<Access> {
    try {
      const result = await this.accessModel.findById(stringToObjectId(id));
      if (!result) throw new NotFoundException();
      return result;
    } catch (error) {
      console.log("Access FindbyId Error: ", error);
    }
  }

  async findAllByUser(id: string): Promise<Access[]> {
    try {
      const result = await this.accessModel.find({ user_id: id });
      if (result.length == 0) throw new NotFoundException();
      return result;
    } catch (error) {
      console.log("Access FindAllByUser Error: ", error);
    }
  }

  async create(access: CreateAccessDto): Promise<Access> {
    const newaccess = {
      ...access,
      api_key: generateApiKey(),
    };
    try {
      const result = await this.accessModel.create(newaccess);
      return result;
    } catch (error) {
      console.log("Access Create Error: ", error);
    }
  }
}
