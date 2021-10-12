import { Test, TestingModule } from '@nestjs/testing';
import { RiotMatchService } from './riot-match.service';

describe('RiotMatchService', () => {
  let service: RiotMatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiotMatchService],
    }).compile();

    service = module.get<RiotMatchService>(RiotMatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
