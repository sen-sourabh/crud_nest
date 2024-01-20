import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoryDto } from './dto/get-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entities';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: mongoose.Model<Category>,
  ) {}

  async getCategories(filter?: GetCategoryDto): Promise<Category[]> {
    try {
      const result = await this.categoryModel.find(filter);
      return result;
    } catch (error) {
      console.log('Get all Category: ', error);
      return error;
    }
  }

  async create(category: CreateCategoryDto): Promise<Category> {
    try {
      const result = await this.categoryModel.create(category);
      return result;
    } catch (error) {
      console.log('Create category error: ', error);
      return error;
    }
  }

  async update(id: string, category: UpdateCategoryDto): Promise<Category> {
    try {
      console.log('Hi: ', category);
      return await this.categoryModel.findByIdAndUpdate(id, category, {
        new: true,
      });
    } catch (error) {
      console.log('Update category error: ', error);
      return error;
    }
  }

  async delete(id: string): Promise<any> {
    try {
      console.log('delete: ', id);
      return await this.categoryModel.findByIdAndRemove(id);
    } catch (error) {
      console.log('Delete category error: ', error);
      return error;
    }
  }
}
