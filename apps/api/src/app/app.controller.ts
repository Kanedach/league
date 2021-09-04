import { Controller, Get } from '@nestjs/common';

import {Message, Summoner} from '@league/api-interfaces';

import { AppService } from './app.service';
import {Observable} from "rxjs";
import {AxiosResponse} from "axios";
import {map} from "rxjs/operators";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('summoner')
  getSummoner(): Observable<Summoner> {
    return this.appService.getSummoner('kanedach').pipe(map( (res) => ({
      id: res.data.id,
      accountId: res.data.accountId,
      puuid: res.data.puuid,
      name: res.data.name,
      profileIconId: res.data.profileIconId,
      revisionDate: res.data.revisionDate,
      summonerLevel: res.data.summonerLevel,
    }) ));
  }
}
