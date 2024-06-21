import { Module } from '@nestjs/common';
import { AppController } from './messages.controller';
import { AppService } from './messages.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
