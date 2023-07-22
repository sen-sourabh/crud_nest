import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerLoader } from './config/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useLogger(Logger);

  const document = SwaggerModule.createDocument(app, SwaggerLoader());
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
