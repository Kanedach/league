import {Injectable} from '@nestjs/common';
import {ChampionMastery, LeagueEntries, MatchInformation, MatchList, Message, Summoner} from '@league/api-interfaces';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {HttpService} from "@nestjs/axios";
import {AxiosResponse} from "axios";
import {tap} from "rxjs/operators";

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getSummoner(summonerName: string):  Observable<AxiosResponse<Summoner>>{
    return this.httpService.get<Summoner>(environment.riot_api_euw_url + '/lol/summoner/v4/summoners/by-name/' + summonerName.toLowerCase(), {headers: {
        'X-Riot-Token': environment.riot_api_token
      }}
    )
  }

  getChampionMastery(summonerId: string):  Observable<AxiosResponse<ChampionMastery[]>>{
    return this.httpService.get<ChampionMastery[]>(environment.riot_api_euw_url + '/lol/champion-mastery/v4/champion-masteries/by-summoner/' + summonerId, {headers: {
        'X-Riot-Token': environment.riot_api_token
      }}
    ).pipe(tap(res => console.log(res.config.url)));
  }

  getMatchList(accountId: string): Observable<AxiosResponse<MatchList[]>>{
    return this.httpService.get<MatchList[]>(environment.riot_api_euw_url + '/lol/match/v4/matchlists/by-account/' + accountId, {headers: {
        'X-Riot-Token': environment.riot_api_token
      }}
    ).pipe(tap(res => console.log(res.config.url)));
  }

  getMatchHistory(matchId: string): Observable<AxiosResponse<MatchInformation>>{
    return this.httpService.get<MatchInformation>(environment.riot_api_euw_url + '/lol/match/v4/matches/' + matchId, {headers: {
        'X-Riot-Token': environment.riot_api_token
      }}
    ).pipe(tap(res => console.log(res.config.url)));
  }

  getLeagueBySummonerId(summonerId: string): Observable<AxiosResponse<LeagueEntries[]>> {
    return this.httpService.get<LeagueEntries[]>(environment.riot_api_euw_url + '/lol/league/v4/entries/by-summoner/' + summonerId, {headers: {
        'X-Riot-Token': environment.riot_api_token
      }}
    );
  }
}
