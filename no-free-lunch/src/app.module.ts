import { Module } from '@nestjs/common'
import { MoneroModule } from './monero/monero.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [MoneroModule, ConfigModule.forRoot()],
})
export class AppModule {}
