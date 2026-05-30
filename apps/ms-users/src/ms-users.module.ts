import { Module } from '@nestjs/common';
import { MsUsersController } from './ms-users.controller';
import { MsUsersService } from './ms-users.service';

@Module({
  imports: [],
  controllers: [MsUsersController],
  providers: [MsUsersService],
})
export class MsUsersModule {}
