import { Test, TestingModule } from '@nestjs/testing';
import { MsClientController } from './ms-client.controller';
import { MsClientService } from './ms-client.service';

describe('MsClientController', () => {
  let msClientController: MsClientController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsClientController],
      providers: [MsClientService],
    }).compile();

    msClientController = app.get<MsClientController>(MsClientController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msClientController.getHello()).toBe('Hello World!');
    });
  });
});
