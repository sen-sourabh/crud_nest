import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(request: Request, response: Response, next: NextFunction) {
    this.logger.log('This is a log message with default color.'); // Log level: "log"
    this.logger.error('This is an error message with red color.'); // Log level: "error"
    this.logger.warn('This is a warning message with yellow color.'); // Log level: "warn"
    this.logger.debug('This is a debug message with default color.'); // Log level: "debug"
    this.logger.verbose('This is a verbose message with default color.'); // Log level: "verbose"
    // console.log("Hi");
    next();
  }
}
