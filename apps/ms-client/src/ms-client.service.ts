import { Injectable } from '@nestjs/common';

@Injectable()
export class MsClientService {
  getHello(): string {
    return 'Hello World!';
  }
}
