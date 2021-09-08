import { Test, TestingModule } from '@nestjs/testing';
import { DdragonController } from './ddragon.controller';

describe('DdragonController', () => {
  let controller: DdragonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DdragonController],
    }).compile();

    controller = module.get<DdragonController>(DdragonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
