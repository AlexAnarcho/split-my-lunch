import { Test, TestingModule } from '@nestjs/testing';
import { MoneroController } from './monero.controller';
import { MoneroService } from './monero.service';

describe('MoneroController', () => {
  let controller: MoneroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoneroController],
      providers: [MoneroService],
    }).compile();

    controller = module.get<MoneroController>(MoneroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
