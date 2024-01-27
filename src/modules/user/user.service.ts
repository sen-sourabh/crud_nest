import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      const users = await this.userModel.find();
      return users;
    } catch (error) {
      console.log('List user error: ', error);
    }
  }

  async create(user: CreateUserDto): Promise<User> {
    try {
      const result = await this.userModel.create(user);
      return result;
    } catch (error) {
      console.log('Create user error: ', error);
      return error;
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const result = await this.userModel.findById(id);
      if (result) {
        return result;
      }
      throw new NotFoundException('User Not Found.');
    } catch (error) {
      console.log('Get user error: ', error);
      return error;
    }
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    try {
      //As Email and Phone would not be update after registration, Need validation here that user object do not include email and phone fields So we need to discard the request with appropriate message
      const result = await this.userModel.findByIdAndUpdate(id, user, {
        new: true,
      });
      if (result) {
        return result;
      }
      throw new NotFoundException('User Not Found.');
    } catch (error) {
      console.log('Update user error: ', error);
      return error;
    }
  }

  async delete(id: string): Promise<GetUserDto> {
    try {
      const result = await this.userModel.findByIdAndRemove(id);
      if (result) {
        return result;
      }
      throw new NotFoundException('User Not Found.');
    } catch (error) {
      console.log('Delete user error: ', error);
      return error;
    }
  }

  async deleteMultiples(
    ids: string[],
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    try {
      const result = await this.userModel.deleteMany({ _id: { $in: ids } });
      if (result.deletedCount > 0) {
        return result;
      }
      throw new NotFoundException('Users Not Found.');
    } catch (error) {
      console.log('Delete multiple user error: ', error);
      return error;
    }
  }
}
