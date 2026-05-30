import { NestFactory } from '@nestjs/core';
import { MsClientModule } from './ms-client.module';

async function bootstrap() {
  const app = await NestFactory.create(MsClientModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
