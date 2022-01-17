import { Module } from '@nestjs/common';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { GetItemsHandler } from './queries/get-items.query';
import { SaveItemHandler } from './commands/save-item.command';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [SaveItemHandler, GetItemsHandler],
})
export class ItemModule {}
