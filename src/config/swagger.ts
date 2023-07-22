import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerLoader = () => {
  const config = new DocumentBuilder()
    .setTitle('CRUD example')
    .setDescription('The CRUD API description')
    .setVersion('1.0')
    .addTag('')
    .build();
  return config;
};
