import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Drivers from './drivers';

async function bootstrap() {
  await Drivers.initalize();
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(10000);
}
bootstrap();
