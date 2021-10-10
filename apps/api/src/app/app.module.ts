import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { DdragonController } from './ddragon/ddragon.controller';
import { DDragonService } from './ddragon/ddragon.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, DdragonController],
  providers: [AppService, DDragonService],
})
export class AppModule {}
