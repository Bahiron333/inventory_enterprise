import { NestFactory } from '@nestjs/core';
import { MsUsersCompanyModule } from './ms-users_company.module';

async function bootstrap() {
  const app = await NestFactory.create(MsUsersCompanyModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
