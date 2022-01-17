import { Controller, Get, Post, Body } from '@nestjs/common';
import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { GetItemsQuery } from './queries/get-items.query';
import { SaveItemCommand } from './commands/save-item.command';

@Controller('items')
export class ItemController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Post()
  create(@Body() createItemDto: SaveItemCommand) {
    this.commandBus.execute(createItemDto);
  }

  @Get()
  findAll() {
    return this.queryBus.execute(new GetItemsQuery());
  }
}
