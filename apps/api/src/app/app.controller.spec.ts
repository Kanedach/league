import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HttpService} from "@nestjs/axios";

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [HttpService],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getSummonerName', () => {
    it('should return "Kanedach"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getSummonerName('kanedach')).toEqual({name: 'Kanedach'});
    });
  });
});
