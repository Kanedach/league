import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChampionMastery, LeagueEntries, MatchInformation, MatchList, Summoner } from '@league/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RiotService {
  constructor(private http: HttpClient) {}

  public getSummoner(summonerName: string): Observable<Summoner> {
    return this.http.get<Summoner>('/api/summoner/' + summonerName.toLocaleLowerCase());
  }

  public getChampionMasteries(summonersId: string): Observable<ChampionMastery[]> {
    return this.http.get<ChampionMastery[]>('/api/champion-masteries/' + summonersId);
  }

  public getLeague(summonersId: string): Observable<LeagueEntries[]> {
    return this.http.get<LeagueEntries[]>('/api/league/' + summonersId);
  }

  public getMatchList(accountId: string): Observable<MatchList> {
    return this.http.get<MatchList>('/api/match-list/' + accountId);
  }

  public getMatchHistory(matchId: number): Observable<MatchInformation> {
    return this.http.get<MatchInformation>('/api/match/' + matchId);
  }
}
