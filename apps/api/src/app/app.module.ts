import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { DdragonController } from './ddragon/ddragon.controller';
import { DDragonService } from './ddragon/ddragon.service';
import { RiotMatchService } from './riot-match/riot-match.service';
import { RiotMatchController } from './riot-match/riot-match.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController, DdragonController, RiotMatchController],
  providers: [AppService, DDragonService, RiotMatchService],
})
export class AppModule {}
