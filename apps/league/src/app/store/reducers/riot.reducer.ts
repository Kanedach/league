import { Action, createReducer, on } from '@ngrx/store';
import {
  ChampionMastery,
  DDChampion,
  LeagueEntries,
  Match,
  MatchInformationAdded,
  MatchList,
  Summoner
} from '@league/api-interfaces';
import * as riotActions from '../actions/riot.actions';
import { AddMatchToMatchList } from '../../riot/lib/add-match-to-match-list';

export interface AsyncStoreModel<T> {
  data: T | null;
  isLoading: boolean;
}

export interface IRiot {
  summoner: AsyncStoreModel<Summoner>;
  championMasteries: AsyncStoreModel<ChampionMastery[]>;
  league: AsyncStoreModel<LeagueEntries[]>;
  matchList: AsyncStoreModel<any>;
  champions: DDChampion | null;
}

export const initRiot: IRiot = {
  summoner: {
    isLoading: false,
    data: null,
  },
  championMasteries: {
    isLoading: false,
    data: [],
  },
  league: {
    isLoading: false,
    data: [],
  },
  matchList: {
    isLoading: false,
    data: null,
  },
  champions: null,
};

const addMatchToList = new AddMatchToMatchList();

const reducer = createReducer(
  initRiot,
  on(riotActions.fetchSummonerName, (state: IRiot): IRiot => ({
    ...state,
    summoner: {
      ...state.summoner,
      isLoading: true,
    },
  })),
  on(riotActions.fetchedSummoner, (state: IRiot, { summoner }): IRiot => ({
    ...state,
    summoner: {
      isLoading: false,
      data: summoner,
    },
  })),
  on(riotActions.fetchChampionMasteries, (state: IRiot): IRiot => ({
    ...state,
    championMasteries: {
      ...state.championMasteries,
      isLoading: true,
    },
  })),
  on(riotActions.fetchedChampionMasteries, (state: IRiot, { championMastery }): IRiot => ({
    ...state,
    championMasteries: {
      data: championMastery,
      isLoading: false,
    },
  })),
  on(riotActions.fetchLeague, (state: IRiot): IRiot => ({
    ...state,
    league: {
      ...state.league,
      isLoading: true,
    },
  })),
  on(riotActions.fetchedLeague, (state: IRiot, { leagueEntry }): IRiot => ({
    ...state,
    league: {
      data: leagueEntry,
      isLoading: false,
    },
  })),
  on(riotActions.fetchMatchList, (state: IRiot): IRiot => ({
    ...state,
    matchList: {
      ...state.matchList,
      isLoading: true,
    },
  })),
  on(riotActions.fetchedMatchList, (state: IRiot, { matchList }): IRiot => ({
    ...state,
    matchList: {
      data: matchList,
      isLoading: false,
    },
  })),
  on(riotActions.fetchedChampions, (state: IRiot, { ddChampions }): IRiot => ({
    ...state,
    champions: ddChampions,
  })),
  on(riotActions.fetchedGame, (state: IRiot, { matchInformation }): IRiot => ({
    ...state,
    matchList: {
      ...state.matchList,
      data: {

        ...state.matchList.data,
        matches: addMatchToList.addMatchToMatchList(state?.matchList?.data?.matches ?? [], matchInformation),
      },
    },
  }))
);

export function riotReducer(state: IRiot | undefined, action: Action): IRiot {
  return reducer(state, action);
}
