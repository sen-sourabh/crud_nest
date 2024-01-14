import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { GetCategoryDto } from '../dto/category.get.dto';

@Injectable()
export class SanitizeFilterPipe implements PipeTransform {
  transform(value?: GetCategoryDto, metadata?: ArgumentMetadata) {
    console.log('val: ', value);
    if (typeof value === 'object') {
      return JSON.parse(JSON.stringify(value));
    }
    return {};
  }
}
