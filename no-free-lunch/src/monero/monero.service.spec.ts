import { Test, TestingModule } from '@nestjs/testing';
import { MoneroService } from './monero.service';

describe('MoneroService', () => {
  let service: MoneroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoneroService],
    }).compile();

    service = module.get<MoneroService>(MoneroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
