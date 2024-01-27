import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { FilterCategroyDto } from '../../modules/category/dto/get-category.dto';
import { FilterInventoryDto } from '../../modules/inventory/dto/get-inventory.dto';
import { FilterUserDto } from '../../modules/user/dto/get-user.dto';

@Injectable()
export class SanitizeFiterPipe implements PipeTransform {
  transform(
    value?: Partial<FilterUserDto | FilterCategroyDto | FilterInventoryDto>,
    metadata?: ArgumentMetadata,
  ) {
    if (typeof value === 'object') {
      return JSON.parse(JSON.stringify(value));
    }
    throw new BadRequestException('Invalid request payload');
  }
}
