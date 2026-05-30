import { NestFactory } from '@nestjs/core';
import { MsMembersModule } from './ms-members.module';

async function bootstrap() {
  const app = await NestFactory.create(MsMembersModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
