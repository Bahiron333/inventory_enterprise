import { Module } from '@nestjs/common';
import { MsClientController } from './ms-client.controller';
import { MsClientService } from './ms-client.service';

@Module({
  imports: [],
  controllers: [MsClientController],
  providers: [MsClientService],
})
export class MsClientModule {}
