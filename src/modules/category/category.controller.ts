import { Body, Controller, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.create.dto';
import { Category } from './entities/category.entities';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Post()
    @ApiOperation({ summary: 'Create a category' })
    @ApiResponse({
        status: 200,
        description: 'Returns an object of created category',
    })
    @ApiBadRequestResponse({
        status: 400,
        description: 'Category not created. Please try again.',
    })
    async createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
        console.log("Req: ", category);
        return this.categoryService.create(category);
    }
}
