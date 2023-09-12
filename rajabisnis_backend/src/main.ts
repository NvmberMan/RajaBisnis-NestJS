import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set konfigurasi CORS
  app.enableCors(); // Ini akan mengizinkan akses lintas asal dari semua origin

  await app.listen(3000);
}
bootstrap();
