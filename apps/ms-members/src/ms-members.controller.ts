import { Controller, Get } from '@nestjs/common';
import { MsMembersService } from './ms-members.service';

@Controller()
export class MsMembersController {
  constructor(private readonly msMembersService: MsMembersService) {}

  @Get()
  getHello(): string {
    return this.msMembersService.getHello();
  }
}
