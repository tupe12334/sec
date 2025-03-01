import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFile } from 'fs/promises';
import { patchNestJsSwagger } from 'nestjs-zod';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  patchNestJsSwagger();
  const config = new DocumentBuilder()
    .setTitle("Security and exchange commission's API")
    .setDescription(
      "This is an API to run a local cache of the Security and exchange commission's API to prevent rate limiting and to provide a more stable and reliable API for the users",
    )
    .setVersion(process.env.npm_package_version)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  const document = documentFactory();

  // Save the Swagger OpenAPI schema to a file
  const outputPath = join(__dirname, '..', 'swagger.json');
  Logger.log(`Writing OpenAPI schema to ${outputPath}`, 'Swagger');

  await writeFile(outputPath, JSON.stringify(document, null, 2));

  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
