import {Injectable} from "@angular/core";
import {IRiot} from "./reducers/riot.reducer";
import {Store} from "@ngrx/store";
import * as riotActions from './actions/riot.actions'

@Injectable()
export class RiotFacadeService {
  constructor(private store$: Store<IRiot>) {
  }

  public get riotUi() {
    return {
      fetchSummonerName: (summonerName: string): void => this.store$.dispatch(riotActions.fetchSummonerName({summonerName}))
    }
  }

}
