import {Action, createReducer, on} from "@ngrx/store";
import {ChampionMastery, DDChampion, LeagueEntries, MatchList, Summoner} from "@league/api-interfaces";
import * as riotActions from '../actions/riot.actions'
import {AddMatchToMatchList} from "../../riot/lib/add-match-to-match-list";

export interface AsyncStoreModel<T> {
  data: T | null;
  isLoading: boolean;
}

export interface IRiot {
  summoner: AsyncStoreModel<Summoner>;
  championMasteries: AsyncStoreModel<ChampionMastery[]>;
  league: AsyncStoreModel<LeagueEntries[]>;
  matchList: AsyncStoreModel<MatchList>;
  champions: DDChampion | null;
}

export const initRiot: IRiot = {
  summoner: {
    isLoading: false,
    data: null
  },
  championMasteries: {
    isLoading: false,
    data: []
  },
  league: {
    isLoading: false,
    data: []
  },
  matchList: {
    isLoading: false,
    data: null
  },
  champions: null
}

const addMatchToList = new AddMatchToMatchList();

const reducer = createReducer(
  initRiot,
  on(riotActions.fetchSummonerName, (state) => (
    {
      ...state,
      summoner: {
        ...state.summoner,
        isLoading: true,

      }
    }
  )),
  on(riotActions.fetchedSummoner, (state, {summoner}) => (
    {
      ...state,
      summoner: {
        isLoading: false,
        data: summoner
      }
    }
  )),
  on(riotActions.fetchChampionMasteries, (state) => ({
    ...state,
    championMasteries: {
      ...state.championMasteries,
      isLoading: true
    }
  })),
  on(riotActions.fetchedChampionMasteries, (state, {championMastery}) => ({
    ...state,
    championMasteries: {
      data: championMastery,
      isLoading: false
    }
  })),
  on(riotActions.fetchLeague, (state) => ({
    ...state,
    league: {
      ...state.league,
      isLoading: true
    }
  })),
  on(riotActions.fetchedLeague, (state, {leagueEntry}) => ({
    ...state,
    league: {
      data: leagueEntry,
      isLoading: false
    }
  })),
  on(riotActions.fetchMatchList, (state) => ({
    ...state,
    matchList: {
      ...state.matchList,
      isLoading: true
    }
  })),
  on(riotActions.fetchedMatchList, (state, {matchList}) => ({
    ...state,
    matchList: {
      data: matchList,
      isLoading: false
    }
  })),
  on(riotActions.fetchedChampions, (state, {ddChampions}) => ({
    ...state,
    champions: ddChampions
  })),
  on(riotActions.fetchedGame, (state, {matchInformation}) => ({
    ...state,
    matchList: {
      ...state.matchList,
      data: {
        ...state.matchList.data,
        // @ts-ignore
        matches: addMatchToList.addMatchToMatchList(state.matchList.data!.matches, matchInformation)
      }
    }
  }))
)

export function riotReducer(state: IRiot | undefined, action: Action): IRiot {
  return reducer(state, action);
}
