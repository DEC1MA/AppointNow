import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Drivers from './drivers';

async function bootstrap() {
  await Drivers.initalize();
  const app = await NestFactory.create(AppModule);
  await app.listen(10000);
}
bootstrap();
