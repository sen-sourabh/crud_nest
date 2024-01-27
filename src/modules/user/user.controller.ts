import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SanitizeFiterPipe } from '../../pipes/sanitizers/get-filters.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto, GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns an array of users' })
  @HttpCode(200)
  async getAllUsers(
    @Query(new SanitizeFiterPipe()) filter?: FilterUserDto,
  ): Promise<User[]> {
    return await this.userService.getUsers(filter);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({ status: 200, description: 'Returns an object of user' })
  @ApiNotFoundResponse({ status: 404, description: 'User Not Found' })
  @HttpCode(200)
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.userService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create an user' })
  @ApiResponse({
    status: 201,
    description: 'Returns an object of created user',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'User not created. Please try again.',
  })
  @HttpCode(201)
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return await this.userService.create(user);
  }

  @Put()
  @ApiOperation({ summary: 'Update an user' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object of updated user',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'User not updated. Please try again.',
  })
  @HttpCode(200)
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({
    status: 200,
    description: 'User has been deleted',
  })
  @ApiNotFoundResponse({ status: 404, description: 'User Not Found' })
  @HttpCode(200)
  async deleteUser(@Param('id') id: string): Promise<GetUserDto> {
    return await this.userService.delete(id);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete multiple users by id' })
  @ApiResponse({
    status: 200,
    description: 'Users has been deleted',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Users Not Found' })
  @HttpCode(200)
  async deleteMultipleUsers(
    @Body() ids: string[],
  ): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return await this.userService.deleteMultiples(ids);
  }
}
