import {Injectable} from "@angular/core";
import {IRiot} from "./reducers/riot.reducer";
import {Store} from "@ngrx/store";
import * as riotActions from './actions/riot.actions'
import * as riotSelectors from './selectors/riot.selectors'
import {Champion, ChampionMastery, LeagueEntries, MatchList, Summoner} from "@league/api-interfaces";
import {Observable} from "rxjs";
import {filterNull} from "../filter-null";
import {map} from "rxjs/operators";

@Injectable()
export class RiotFacadeService {
  constructor(private store$: Store<IRiot>) {
  }

  public get riotUi() {
    return {
      fetchSummonerName: (summonerName: string): void => this.store$.dispatch(riotActions.fetchSummonerName({summonerName})),
      getSummonr: (): Observable<Summoner> => this.store$.select(riotSelectors.getSummonerName),
      getChampionMasteries: (): Observable<ChampionMastery[]> => this.store$.select(riotSelectors.getChampionMasteries),
      getLeague: ((): Observable<LeagueEntries[]> => this.store$.select(riotSelectors.getLeague).pipe(filterNull())),
      getMatchList: ((): Observable<MatchList> => this.store$.select(riotSelectors.getMatchList).pipe(filterNull())),
      getMatchHistory: ():void => this.store$.dispatch(riotActions.fetchAllGames())
    }
  }

  public get dDragonUi() {
    return {
      fetchChampions: (): void => this.store$.dispatch(riotActions.fetchChampions()),
      getChampions: (): Observable<Champion[] | null | undefined> => this.store$.select(riotSelectors.getChampions)
    }
  }

}
