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
    const itemInput = new Item();
    itemInput.title = command.title;
    const item = this.itemRepo.create(itemInput);
    await this.itemRepo.save(item);
  }
}
