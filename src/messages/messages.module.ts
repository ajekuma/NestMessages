import { Module } from '@nestjs/common';
import { AppController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [MessagesService, MessagesRepository],
})
export class AppModule { }
