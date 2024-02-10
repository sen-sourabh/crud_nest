import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SanitizeFiterPipe } from '../../pipes/sanitizers/get-filters.pipe';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { FilterInventoryDto } from './dto/get-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { InventoryService } from './inventory.service';

@ApiTags('Inventories')
@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Post('/create')
  @HttpCode(201)
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Post()
  @ApiOperation({ summary: 'Get inventory data.' })
  @ApiResponse({
    status: 200,
    description: 'Get inventory data.',
  })
  @HttpCode(200)
  getinventory(@Body(new SanitizeFiterPipe()) filter: FilterInventoryDto) {
    return this.inventoryService.getInventory(filter);
  }

  @Put(':id')
  @HttpCode(200)
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.update(+id, updateInventoryDto);
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(+id);
  }
}
