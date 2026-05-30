import { Injectable } from '@nestjs/common';

@Injectable()
export class MsUsersCompanyService {
  getHello(): string {
    return 'Hello World!';
  }
}
