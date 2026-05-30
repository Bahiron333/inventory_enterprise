import { Test, TestingModule } from '@nestjs/testing';
import { MsNotificationController } from './ms-notification.controller';
import { MsNotificationService } from './ms-notification.service';

describe('MsNotificationController', () => {
  let msNotificationController: MsNotificationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsNotificationController],
      providers: [MsNotificationService],
    }).compile();

    msNotificationController = app.get<MsNotificationController>(MsNotificationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msNotificationController.getHello()).toBe('Hello World!');
    });
  });
});
