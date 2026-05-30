import { Controller, Get } from '@nestjs/common';
import { MsUsersService } from './ms-users.service';

@Controller()
export class MsUsersController {
  constructor(private readonly msUsersService: MsUsersService) {}

  @Get()
  getHello(): string {
    return this.msUsersService.getHello();
  }
}
