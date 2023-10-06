import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccessService } from './access.service';
import { CreateAccessDto } from './dto/access.create.dto';
import { Access } from './entities/access.entity';

@ApiTags('Access')
@Controller('access')
export class AccessController {
  constructor(private accessService: AccessService) {}

  @Get()
  @ApiOperation({ summary: 'Get all access' })
  @ApiResponse({ status: 200, description: 'Returns an array of access' })
  async getAllaccess(): Promise<Access[]> {
    return this.accessService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get access by Id' })
  @ApiResponse({ status: 200, description: 'Returns an object of access' })
  @ApiNotFoundResponse({ status: 404, description: 'Access Not Found' })
  async getaccessById(@Param('id') id: string): Promise<Access> {
    return this.accessService.findById(id);
  }

  @Get('user/:user_id')
  @ApiOperation({ summary: 'Get all access by user Id' })
  @ApiResponse({
    status: 200,
    description: 'Returns an array of access of user',
  })
  @ApiNotFoundResponse({ status: 404, description: 'Access Not Found' })
  async getaccessByUserId(
    @Param('user_id') user_id: string,
  ): Promise<Access[]> {
    return this.accessService.findAllByUser(user_id);
  }

  @Post()
  @ApiOperation({ summary: 'Create an access' })
  @ApiResponse({
    status: 200,
    description: 'Returns an object of created access',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'Access not created. Please try again.',
  })
  async createUser(@Body() access: CreateAccessDto): Promise<Access> {
    return this.accessService.create(access);
  }
}
