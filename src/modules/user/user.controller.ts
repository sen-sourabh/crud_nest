import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Returns an array of users' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({ status: 200, description: 'Returns an object of user' })
  @ApiNotFoundResponse({ status: 404, description: 'User Not Found' })
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create an user' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object of created user',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'User not created. Please try again.',
  })
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an user' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object of updated user',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'User not updated. Please try again.',
  })
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, user);
  }
}
