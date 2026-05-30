import { Module } from '@nestjs/common';
import { MsMembersController } from './ms-members.controller';
import { MsMembersService } from './ms-members.service';

@Module({
  imports: [],
  controllers: [MsMembersController],
  providers: [MsMembersService],
})
export class MsMembersModule {}
