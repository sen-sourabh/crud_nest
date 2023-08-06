import mongoose from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/user.update.dto';
import { CreateUserDto } from './dto/user.create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async create(user: CreateUserDto): Promise<User> {
    const result = await this.userModel.create(user);
    return result;
  }

  async findById(id: string): Promise<User> {
    const result = await this.userModel.findById(id);
    if (!result) throw new NotFoundException('User Not Found.');
    return result;
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    const result = await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
    return result;
  }
}
