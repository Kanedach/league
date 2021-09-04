import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RiotInterceptor} from "./riot.interceptor";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
