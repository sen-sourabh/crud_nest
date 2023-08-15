import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerLoader } from './config/swagger';
import { Logger } from '@nestjs/common';
import { appReady } from './config/app-ready';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useLogger(Logger);

  //Swagger Initialization
  const document = SwaggerModule.createDocument(app, SwaggerLoader());
  SwaggerModule.setup('api', app, document);

  //Application Ready
  appReady(PORT);

  await app.listen(PORT);
}
bootstrap();
