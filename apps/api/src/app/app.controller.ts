import {Controller, Get, Param, HttpCode} from '@nestjs/common';
import {ChampionMastery, LeagueEntries, MatchInformation, MatchList, Message, Summoner} from '@league/api-interfaces';
import {AppService} from './app.service';
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('summoner/:name')
  getSummonerName(@Param('name') name: string): Observable<Summoner> {
    return this.appService.getSummoner(name).pipe(
      map((res) => (res.data))
    )
  }

  @Get('champion-masteries/:summonerId')
  getChampionMastery(@Param('summonerId') summonerId: string): Observable<ChampionMastery[]> {
    return this.appService.getChampionMastery(summonerId).pipe(
      map((res) => (res.data))
    )
  }

  @Get('match-list/:accountId')
  getMatchList(@Param('accountId') accountId: string): Observable<MatchList[]> {
    return this.appService.getMatchList(accountId).pipe(
      map((res) => (res.data))
    )
  }

  @Get('match/:matchId')
  getMatchHistory(@Param('matchId') matchId: string): Observable<MatchInformation> {
    return this.appService.getMatchHistory(matchId).pipe(
      map((res) => (res.data))
    )
  }

  @Get('league/:summonerId')
  getLeagueBySummonerId(@Param('summonerId') summonerId: string): Observable<LeagueEntries[]> {
    return this.appService.getLeagueBySummonerId(summonerId).pipe(
      map((res) => (res.data))
    )
  }

}
