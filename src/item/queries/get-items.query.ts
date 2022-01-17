import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Item } from '../entities/item.entity';

export class GetItemsQuery {}

@QueryHandler(GetItemsQuery)
export class GetItemsHandler implements IQueryHandler<GetItemsQuery> {
  constructor(@InjectRepository(Item) private itemRepo: Repository<Item>) {}
  async execute(query: GetItemsQuery): Promise<Item[]> {
    return await this.itemRepo.find();
  }
}
