import {Injectable} from "@angular/core";
import {IRiot} from "./reducers/riot.reducer";
import {Store} from "@ngrx/store";
import * as riotActions from './actions/riot.actions'
import * as riotSelectors from './selectors/riot.selectors'
import {Champion, ChampionMastery, DDChampion, LeagueEntries, MatchList, Summoner} from "@league/api-interfaces";
import {Observable} from "rxjs";

@Injectable()
export class RiotFacadeService {
  constructor(private store$: Store<IRiot>) {
  }

  public get riotUi() {
    return {
      fetchSummonerName: (summonerName: string): void => this.store$.dispatch(riotActions.fetchSummonerName({summonerName})),
      getSummonr: (): Observable<Summoner> => this.store$.select(riotSelectors.getSummonerName),
      getChampionMasteries: (): Observable<ChampionMastery[]> => this.store$.select(riotSelectors.getChampionMasteries),
      getLeague: (): Observable<LeagueEntries[]> => this.store$.select(riotSelectors.getLeague),
      getMatchList: (): Observable<MatchList> => this.store$.select(riotSelectors.getMatchList)
    }
  }

  public get dDragonUi() {
    return {
      fetchChampions: (): void => this.store$.dispatch(riotActions.fetchChampions()),
      getChampions: (): Observable<Champion[] | null | undefined> => this.store$.select(riotSelectors.getChampions)
    }
  }

}