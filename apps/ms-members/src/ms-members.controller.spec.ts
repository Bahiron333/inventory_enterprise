import { Test, TestingModule } from '@nestjs/testing';
import { MsMembersController } from './ms-members.controller';
import { MsMembersService } from './ms-members.service';

describe('MsMembersController', () => {
  let msMembersController: MsMembersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsMembersController],
      providers: [MsMembersService],
    }).compile();

    msMembersController = app.get<MsMembersController>(MsMembersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msMembersController.getHello()).toBe('Hello World!');
    });
  });
});
