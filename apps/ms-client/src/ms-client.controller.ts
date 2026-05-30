import { Controller, Get } from '@nestjs/common';
import { MsClientService } from './ms-client.service';

@Controller()
export class MsClientController {
  constructor(private readonly msClientService: MsClientService) {}

  @Get()
  getHello(): string {
    return this.msClientService.getHello();
  }
}
