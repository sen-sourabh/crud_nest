import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FilterCategroyDto, GetCategoryDto } from './dto/get-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entities';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: mongoose.Model<Category>,
  ) {}

  async getCategories(filter?: FilterCategroyDto): Promise<Category[]> {
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
      const result = await this.categoryModel.findByIdAndUpdate(id, category, {
        new: true,
      });
      if (result) {
        return result;
      }
      throw new NotFoundException('Category Not Found.');
    } catch (error) {
      console.log('Update category error: ', error);
      return error;
    }
  }

  async delete(id: string): Promise<GetCategoryDto> {
    try {
      const result = await this.categoryModel.findByIdAndRemove(id);
      if (result) {
        return result;
      }
      throw new NotFoundException('Category Not Found.');
    } catch (error) {
      console.log('Delete category error: ', error);
      return error;
    }
  }

  async deleteMultiples(
    ids: string[],
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    try {
      const result = await this.categoryModel.deleteMany({ _id: { $in: ids } });
      if (result.deletedCount > 0) {
        return result;
      }
      throw new NotFoundException('categories Not Found.');
    } catch (error) {
      console.log('Delete multiple category error: ', error);
      return error;
    }
  }
}
