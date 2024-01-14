import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateCategoryDto } from './dto/category.create.dto';
import { GetCategoryDto } from './dto/category.get.dto';
import { UpdateCategoryDto } from './dto/category.update.dto';
import { Category } from './entities/category.entities';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: mongoose.Model<Category>,
  ) {}

  async create(category: CreateCategoryDto): Promise<Category> {
    try {
      const result = await this.categoryModel.create(category);
      return result;
    } catch (error) {
      console.log('Create category error: ', error);
      return error;
    }
  }

  async getAllCategories(filter?: GetCategoryDto): Promise<Category[]> {
    try {
      const result = await this.categoryModel.find(filter);
      return result;
    } catch (error) {
      console.log('Get all Category: ', error);
      return error;
    }
  }

  async update(id: string, category: UpdateCategoryDto): Promise<Category> {
    try {
      const result = await this.categoryModel.findByIdAndUpdate(id, category, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log('Update category error: ', error);
      return error;
    }
  }
}
