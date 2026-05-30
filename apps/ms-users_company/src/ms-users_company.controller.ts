import { Controller, Get } from '@nestjs/common';
import { MsUsersCompanyService } from './ms-users_company.service';

@Controller()
export class MsUsersCompanyController {
  constructor(private readonly msUsersCompanyService: MsUsersCompanyService) {}

  @Get()
  getHello(): string {
    return this.msUsersCompanyService.getHello();
  }
}
