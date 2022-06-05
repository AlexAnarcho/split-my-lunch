import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { MoneroService } from './monero.service'
import { CreateMoneroDto } from './dto/create-monero.dto'

@Controller('monero')
export class MoneroController {
  constructor(private readonly moneroService: MoneroService) {}

  @Get()
  create(@Body() createMoneroDto: CreateMoneroDto) {
    return this.moneroService.getSeedFromWallet(createMoneroDto)
  }

  @Post('/create/:user')
  createInvoice(@Body() body: any) {
    return this.moneroService.createInvoice(body)
  }

  @Post(':user')
  checkInvoice(@Body() body: any) {
    return this.moneroService.checkInvoice(body)
  }

  @Get('/status/:user/:index')
  getBalance(@Param() { user, index }) {
    return this.moneroService.getSubaddress(user, index)
  }
}
