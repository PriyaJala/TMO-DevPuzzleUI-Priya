import { Injectable, NotFoundException } from '@nestjs/common';
import { StorageService } from '@tmo/shared/storage';
import { Book, ReadingListItem } from '@tmo/shared/models';

const KEY = '[okreads API] Reading List';

@Injectable()
export class ReadingListService {
  private readonly storage = new StorageService<ReadingListItem[]>(KEY, []);

  async getList(): Promise<ReadingListItem[]> {
    return this.storage.read();
  }

  async addBook(b: Book): Promise<void> {
    this.storage.update(list => {
      const { id, ...rest } = b;
      list.push({
        bookId: id,
        ...rest
      });
      return list;
    });
  }

  async removeBook(id: string): Promise<void> {
    this.storage.update(list => {
      return list.filter(x => x.bookId !== id);
    });
  }
  //async call to when book is marked as finished
  async markBookAsFinished(itemId: string): Promise<void> {
    this.storage.update(list => {
      const itemIndex = list.findIndex(x => x.bookId === itemId);

      if (itemIndex !== -1) {
        list[itemIndex].finished = true;
        list[itemIndex].finishedDate = new Date().toISOString();
       
      } else {
        throw new NotFoundException('Reading list item not found');
      }
     
      return list;
    });
  }
}
