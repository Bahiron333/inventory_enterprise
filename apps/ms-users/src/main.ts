import { NestFactory } from '@nestjs/core';
import { MsUsersModule } from './ms-users.module';

async function bootstrap() {
  const app = await NestFactory.create(MsUsersModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
