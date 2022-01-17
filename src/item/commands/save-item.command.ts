import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Item } from '../entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class SaveItemCommand {
  title: string;
}

@CommandHandler(SaveItemCommand)
export class SaveItemHandler implements ICommandHandler<SaveItemCommand> {
  constructor(@InjectRepository(Item) private itemRepo: Repository<Item>) {}
  async execute(command: SaveItemCommand) {
    const item = new Item();
    item.title = command.title;
    await this.itemRepo.insert(item);
  }
}
