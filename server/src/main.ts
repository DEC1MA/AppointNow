import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import Drivers from "./drivers";
import * as dotenv from "dotenv";

async function bootstrap() {
  dotenv.config();
  await Drivers.initalize();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8000, "0.0.0.0");
}
bootstrap();
