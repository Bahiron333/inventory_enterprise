import { Injectable } from '@nestjs/common';

@Injectable()
export class MsMembersService {
  getHello(): string {
    return 'Hello World!';
  }
}
