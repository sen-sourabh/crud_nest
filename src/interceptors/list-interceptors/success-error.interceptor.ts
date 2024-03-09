import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SuccessErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        status: 'success',
        code: HttpStatus.OK,
        message: 'Request successful',
        data,
        meta: {
          totalItems: data instanceof Array ? data.length : 1,
          page: 1, // You may customize this based on your pagination logic
          limit: 10, // You may customize this based on your pagination logic
        },
      })),
      catchError((error) => {
        return throwError({
          status: 'error',
          code: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'Internal Server Error',
          meta: {
            totalItems: 0,
            page: 1,
            limit: 10,
          },
        });
      }),
    );
  }
}
