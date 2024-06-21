import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './messages.service';
import { CreateMessageDto } from '../dtos/create-message.dto';

@Controller('messages')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  listMessage() {
    return "get message";
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return "creating message";
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    console.log(id);
    return "id is " + id;
  }

}  
