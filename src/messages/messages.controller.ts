import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from '../dtos/create-message.dto';

@Controller('messages')
export class AppController {

  constructor(public messagesService: MessagesService) {

  }

  @Get()
  listMessage() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    console.log(id);
    return this.messagesService.findOne(id);
  }

}  
