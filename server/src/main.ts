import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  patchNestJsSwagger();
  const config = new DocumentBuilder()
    .setTitle("Security and exchange commission's API")
    .setDescription(
      "This is an API to run a local cache of the Security and exchange commission's API to prevent rate limiting and to provide a more stable and reliable API for the users",
    )
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  const document = documentFactory();
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
