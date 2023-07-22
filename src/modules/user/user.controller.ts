import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('get/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }

  @Post('create')
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }

  @Put('update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, user);
  }
}
