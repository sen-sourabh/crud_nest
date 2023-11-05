import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Category } from './entities/category.entities';

@Injectable()
export class CategoryService {
    
    constructor(
        @InjectModel(Category.name)
        private categoryModel: mongoose.Model<Category>,
      ) {}
    
    async create(category: any): Promise<Category> {
        try {
          // if (category.parent_category_id) {
          //   category.parent_category_id = stringToObjectId(category.parent_category_id);
          // }
          console.log("START");
          
          const result = await this.categoryModel.create(category);
          console.log("Reesult: ", result);
          
          return result;
        } catch (error) {
          console.log('Category Create Error: ', error);
        }
    }
}
