import { Module } from '@nestjs/common';
import { MoneroService } from './monero.service';
import { MoneroController } from './monero.controller';

@Module({
  controllers: [MoneroController],
  providers: [MoneroService]
})
export class MoneroModule {}
