import { Test, TestingModule } from '@nestjs/testing';
import { RiotMatchController } from './riot-match.controller';

describe('RiotMatchController', () => {
  let controller: RiotMatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiotMatchController],
    }).compile();

    controller = module.get<RiotMatchController>(RiotMatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
