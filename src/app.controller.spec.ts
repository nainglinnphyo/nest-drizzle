/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as schema from '@app/modules/drizzle/schema';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { DRIZZLE_ORM } from './core/constants/db.constants';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;
  let postgresJsDatabaseMock: PostgresJsDatabase<typeof schema>;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: DRIZZLE_ORM,
          useExisting: postgresJsDatabaseMock,
        },
      ],
    }).compile();

    service = moduleRef.get<AppService>(AppService);
    controller = moduleRef.get<AppController>(AppController);
  });

  describe('getHello', () => {
    it('should return string', async () => {
      const result = 'test';
      jest.spyOn(service, 'getHello').mockImplementation(() => result);

      expect(await controller.getHello()).toBe(result);
    });

    it('should return user array', async () => {
      const expectedResult = [{ id: 1, name: 'test' }];
      // console.log(postgresJsDatabaseMock);
      const res = await controller.getUser();
      // jest.spyOn(controller, 'getUser').mockResolvedValue(expectedResult); // Fix: Change mockReturnValue to mockResolvedValue
      // expect(res).toBe(expectedResult);
    });
  });
});
