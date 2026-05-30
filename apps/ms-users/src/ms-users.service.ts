import { Injectable } from '@nestjs/common';

@Injectable()
export class MsUsersService {
  getHello(): string {
    return 'Hello World!';
  }
}
