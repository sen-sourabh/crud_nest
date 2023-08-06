import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { UserService } from '../../modules/user/user.service';
import { NextFunction } from 'express';

@Injectable()
export class AccessMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(request: Request, res: Response, next: NextFunction) {
    const apiKey = request.headers['api_key'];

    if (!apiKey) {
      throw new HttpException('API key not provided', HttpStatus.UNAUTHORIZED);
    }

    // const user = await this.userService.findByApiKey(apiKey);

    // if (!user) {
    //   throw new HttpException('Invalid API key', HttpStatus.UNAUTHORIZED);
    // }

    // request = { ...request, user }; // Attach the user object to the request for further processing
    next();
  }
}
