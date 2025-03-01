import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { AppModule } from './app.module';
import { patchNestJsSwagger } from 'nestjs-zod';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  patchNestJsSwagger();
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  const document = documentFactory();
  SwaggerModule.setup('api', app, document);

  // Save the Swagger OpenAPI schema to a file
  const outputPath = join(__dirname, '..', 'swagger-spec.json');
  console.log(`Writing OpenAPI schema to ${outputPath}`);

  await writeFile(outputPath, JSON.stringify(document, null, 2));

  await app.listen(3000);
}
bootstrap();
