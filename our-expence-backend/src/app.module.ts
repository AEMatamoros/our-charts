import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from 'nestjs-dotenv';

import { ProductModule } from './schemas/schemas.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://AEMMOEU2022:aQl0p2vnEqkiskCP@cluster0.r47rq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

