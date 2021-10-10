import { Injectable } from '@angular/core';
import { IRiot } from '../reducers/riot.reducer';
import { createAction, Store } from '@ngrx/store';
import { RiotService } from '../../riot.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as riotActions from '../actions/riot.actions';
import * as riotSelectors from '../selectors/riot.selectors';
import { DDragonService } from '../../ddragon.service';

@Injectable()
export class RiotEffects {
  constructor(
    private actions$: Actions,
    private riotService: RiotService,
    private store$: Store<IRiot>,
    private dDragonService: DDragonService
  ) {}

  public fetchSummoner = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchSummonerName),
      mergeMap((summonerAction) =>
        this.riotService
          .getSummoner(summonerAction.summonerName)
          .pipe(
            switchMap((fetchedSummoner) => [
              riotActions.fetchedSummoner({ summoner: fetchedSummoner }),
              riotActions.fetchChampionMasteries({ summonersId: fetchedSummoner.id }),
              riotActions.fetchLeague({ summonersId: fetchedSummoner.id }),
              riotActions.fetchMatchList({ accountId: fetchedSummoner.accountId }),
            ])
          )
      )
    );
  });

  fetchGames = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchedMatchList),
      withLatestFrom(this.store$.select(riotSelectors.allGameIds)),
      switchMap(([action, gameId]) => {
        return gameId!.map((game) => riotActions.fetchGame({ gameId: Number(game) }));
      })
    );
  });

  public fetchChampionMasteries = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchChampionMasteries),
      switchMap((action) =>
        this.riotService.getChampionMasteries(action.summonersId).pipe(
          map((championMastery) =>
            riotActions.fetchedChampionMasteries({
              championMastery,
            })
          )
        )
      )
    );
  });

  public fetchLeague = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchLeague),
      mergeMap((action) =>
        this.riotService.getLeague(action.summonersId).pipe(
          map((leagueEntry) =>
            riotActions.fetchedLeague({
              leagueEntry,
            })
          )
        )
      )
    );
  });

  public fetchMatchList = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchMatchList),
      mergeMap((action) =>
        this.riotService.getMatchList(action.accountId).pipe(
          map((matchList) =>
            riotActions.fetchedMatchList({
              matchList,
            })
          )
        )
      )
    );
  });

  public fetchDDChampions = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchChampions),
      mergeMap((action) =>
        this.dDragonService.getDDragonChampion().pipe(
          map((ddChampions) =>
            riotActions.fetchedChampions({
              ddChampions,
            })
          )
        )
      )
    );
  });

  public getMatchHistory = createEffect(() => {
    return this.actions$.pipe(
      ofType(riotActions.fetchGame),
      mergeMap((action) =>
        this.riotService.getMatchHistory(action.gameId).pipe(
          map((matchInformation) =>
            riotActions.fetchedGame({
              matchInformation,
            })
          )
        )
      )
    );
  });
}
