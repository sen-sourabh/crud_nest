import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { SignInWithEmailPasswordDto } from '../auth/dto/signin.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto, GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: mongoose.Model<User>,
  ) {}

  async getUsers(filter?: FilterUserDto): Promise<User[]> {
    try {
      const users = await this.userModel.find(filter);
      return users;
    } catch (error) {
      console.log('List user error: ', error);
      throw new Error('Failed to fetch users.');
    }
  }

  async create(user: CreateUserDto): Promise<User> {
    try {
      const result = await this.userModel.create(user);
      return result;
    } catch (error) {
      console.log('Create user error: ', error);
      throw new Error('Failed to create user.');
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const result = await this.userModel.findById(id);
      console.log('res: ', result);

      if (result) {
        return result;
      }
      throw new NotFoundException('User Not Found.');
    } catch (error) {
      console.log('Get user error: ', error);
      throw new Error(`Failed to fetch user with id: ${id}.`);
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
      throw new Error(`Failed to update user with id: ${id}`);
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
      throw new Error(`Failed to delete user with id: ${id}`);
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
      throw new Error(
        `Failed to delete all users with ids: ${ids}, May be some users deleted. Please verify using getUserById/getAllUsers APIs`,
      );
    }
  }

  async getUserByEmailPassword(
    body: SignInWithEmailPasswordDto,
  ): Promise<User> {
    try {
      const user = await this.userModel.find(body);
      if (user.length > 0) {
        return user[0];
      }
      throw new NotFoundException(
        'Invalid email or password, Please try agian with valid credentials',
      );
    } catch (error) {
      console.log('SignIn email or password error: ', error);
      throw new Error(
        `Failed to fetch user with email: ${body?.email} & password: ${body?.password}`,
      );
    }
  }
}
