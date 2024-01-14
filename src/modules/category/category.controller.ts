import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.create.dto';
import { GetCategoryDto } from './dto/category.get.dto';
import { UpdateCategoryDto } from './dto/category.update.dto';
import { Category } from './entities/category.entities';
import { SanitizeFilterPipe } from './pipes/sanitize_filter.pipe';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Get all categories ' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiResponse({ status: 200, description: 'Returns a list of categories' })
  async getAllCategories(
    @Body(new SanitizeFilterPipe()) filter?: GetCategoryDto,
  ): Promise<Category[]> {
    console.log('control: ', filter);

    return this.categoryService.getAllCategories(filter);
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
    @Param() id: string,
    @Body() category: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoryService.update(id, category);
  }
}
