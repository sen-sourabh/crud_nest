import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { GetCategoryDto } from '../dto/get-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';

@Injectable()
export class SanitizeUpdateRequestPipe implements PipeTransform {
  transform(value?: GetCategoryDto, metadata?: ArgumentMetadata) {
    if (typeof value === 'object') {
      return this.validateUpdateRequest(JSON.parse(JSON.stringify(value)));
    }
    throw new BadRequestException('Invalid request payload');
  }

  async validateUpdateRequest(
    body: Record<string, any>,
  ): Promise<UpdateCategoryDto> {
    try {
      const userInstance = plainToClass(UpdateCategoryDto, body);
      const errors = await validate(userInstance, { whitelist: true });

      if (errors.length > 0) {
        throw new BadRequestException(errors);
      }

      return userInstance;
    } catch (error) {
      console.error('Sanitize request error:', error);
      throw new BadRequestException('Invalid request payload');
    }
  }
}
