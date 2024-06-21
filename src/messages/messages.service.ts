import { Injectable, NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }

@Injectable()
export class MessagesService {

  constructor(public messagesRepo: MessagesRepository) {

  }

  async findOne(id: string) {
    const message = await this.messagesRepo.findOne(id);
    if (!message) {
      throw new NotFoundException('message with id ' + id + ' not found');
    }
    return message;
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }

}

