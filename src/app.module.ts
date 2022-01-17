import { Module } from '@nestjs/common';

import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), ItemModule],
})
export class AppModule {}
