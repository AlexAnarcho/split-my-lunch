import { PartialType } from '@nestjs/mapped-types';
import { CreateMoneroDto } from './create-monero.dto';

export class UpdateMoneroDto extends PartialType(CreateMoneroDto) {}
