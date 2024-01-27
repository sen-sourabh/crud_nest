import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
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
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Post()
  @ApiOperation({ summary: 'Get inventory data.' })
  @ApiResponse({
    status: 200,
    description: 'Get inventory data.',
  })
  getinventory(@Body(new SanitizeFiterPipe()) filter: FilterInventoryDto) {
    return this.inventoryService.getInventory(filter);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.update(+id, updateInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(+id);
  }
}
