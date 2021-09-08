import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import {HttpService} from "@nestjs/axios";

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
      imports: [HttpService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getSummoner('kanedach')).toEqual({ Name: 'Kanedach' });
    });
  });
});
