import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerLoader = () => {
  const config = new DocumentBuilder()
    .setTitle('CRUD example')
    .setDescription('The CRUD API description')
    .setVersion('1.0')
    .setContact(
      'Sourabh',
      'https://sourabhsen201313.wixsite.com/sourabh',
      'sourabhsen201313@gmail.com',
    ) // Set contact information
    .addBearerAuth() // Enable Bearer authentication for your API
    .build();
  return config;
};
