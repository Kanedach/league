import {Injectable} from "@angular/core";
import {IRiot} from "../reducers/riot.reducer";
import {Store} from "@ngrx/store";
import {RiotService} from "../../riot.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, mergeMap, switchMap} from "rxjs/operators";
import * as riotActions from '../actions/riot.actions'

@Injectable()
export class RiotEffects {
  constructor(private actions$: Actions,
              private riotService: RiotService,
              private store$: Store<IRiot>) {
  }

  public fetchSummoner = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchSummonerName),
      mergeMap((summonerAction) => this.riotService.getSummoner(summonerAction.summonerName).pipe(
        switchMap(
          fetchedSummoner => [
            riotActions.fetchedSummoner({summoner: fetchedSummoner}),
            riotActions.fetchChampionMasteries({summonersId: fetchedSummoner.id}),
            riotActions.fetchLeague({summonersId: fetchedSummoner.id}),
            riotActions.fetchMatchList({accountId: fetchedSummoner.accountId}),
          ]
        ))
      ))
  })

  public fetchChampionMasteries = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchChampionMasteries),
      mergeMap((action) => this.riotService.getChampionMasteries(action.summonersId).pipe(
        map((championMastery) => riotActions.fetchedChampionMasteries({
          championMastery
        }))
      ))
    )
  })

  public fetchLeague = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchLeague),
      mergeMap((action) => this.riotService.getLeague(action.summonersId).pipe(
        map((leagueEntry) => riotActions.fetchedLeague({
          leagueEntry
        }))
      ))
    )
  })

  public fetchMatchList = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchMatchList),
      mergeMap((action) => this.riotService.getMatchList(action.accountId).pipe(
        map((matchList) => riotActions.fetchedMatchList({
          matchList
        }))
      ))
    )
  })

}
