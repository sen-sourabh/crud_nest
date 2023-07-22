import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerLoader } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, SwaggerLoader());
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
