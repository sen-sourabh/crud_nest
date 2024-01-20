import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { GetCategoryDto } from '../dto/get-category.dto';

@Injectable()
export class SanitizeFiterPipe implements PipeTransform {
  transform(value?: GetCategoryDto, metadata?: ArgumentMetadata) {
    if (typeof value === 'object') {
      return JSON.parse(JSON.stringify(value));
    }
    throw new BadRequestException('Invalid request payload');
  }
}
