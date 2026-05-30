import { Module } from '@nestjs/common';
import { MsUsersCompanyController } from './ms-users_company.controller';
import { MsUsersCompanyService } from './ms-users_company.service';

@Module({
  imports: [],
  controllers: [MsUsersCompanyController],
  providers: [MsUsersCompanyService],
})
export class MsUsersCompanyModule {}
