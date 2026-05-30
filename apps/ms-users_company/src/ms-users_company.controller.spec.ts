import { Test, TestingModule } from '@nestjs/testing';
import { MsUsersCompanyController } from './ms-users_company.controller';
import { MsUsersCompanyService } from './ms-users_company.service';

describe('MsUsersCompanyController', () => {
  let msUsersCompanyController: MsUsersCompanyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsUsersCompanyController],
      providers: [MsUsersCompanyService],
    }).compile();

    msUsersCompanyController = app.get<MsUsersCompanyController>(MsUsersCompanyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msUsersCompanyController.getHello()).toBe('Hello World!');
    });
  });
});
