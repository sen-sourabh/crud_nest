import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoryDto } from './dto/get-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entities';
import { SanitizeFiterPipe } from './pipes/sanitize_filter.pipe';
import { SanitizeUpdateRequestPipe } from './pipes/sanitize_update_request.pipe';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Get all categories ' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 200, description: 'Returns a list of categories' })
  async getCategories(
    @Body(new SanitizeFiterPipe()) filter?: GetCategoryDto,
  ): Promise<Category[]> {
    console.log('control: ', filter);

    return this.categoryService.getCategories(filter);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create the category' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object of created category',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Category not created. Please try again.',
  })
  async createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Put()
  @ApiOperation({ summary: 'Update the category' })
  async updateCategory(
    @Param('id') id: string,
    @Body(new SanitizeUpdateRequestPipe()) category: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.update(id, category);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete the category' })
  async deleteCategory(@Param('id') id: string): Promise<any> {
    console.log('del: ', id);

    return this.categoryService.delete(id);
  }
}
