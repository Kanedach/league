import {Action, createReducer, on} from "@ngrx/store";
import {ChampionMastery, DDChampion, LeagueEntries, MatchList, Summoner} from "@league/api-interfaces";
import * as riotActions from '../actions/riot.actions'
import {AddMatchToMatchList} from "../../riot/lib/add-match-to-match-list";

export interface IRiot {
  summoner: {
    isLoading: boolean;
    summoner: Summoner;
  },
  championMasteries: {
    isLoading: boolean;
    championMasteries: ChampionMastery[]
  },
  league: {
    isLoading: boolean;
    league: LeagueEntries[]
  },
  matchList: {
    isLoading: boolean;
    matchList: MatchList | null
  },
  champions: DDChampion | null
}

const initRiot: IRiot = {
  summoner: {
    isLoading: false,
    summoner: {
      id: '',
      accountId: '',
      puuid: '',
      name: '',
      profileIconId: 0,
      revisionDate: 0,
      summonerLevel: 0,
    }
  },
  championMasteries: {
    isLoading: false,
    championMasteries: []
  },
  league: {
    isLoading: false,
    league: []
  },
  matchList: {
    isLoading: false,
    matchList: null
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
        summoner
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
      championMasteries: championMastery,
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
      league: leagueEntry,
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
      matchList,
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
      // @ts-ignore
      matchList: {
        ...state.matchList.matchList,
        // @ts-ignore
        matches: addMatchToList.addMatchToMatchList(state.matchList.matchList.matches, matchInformation)
      }
    }
  }))
)

export function riotReducer(state: IRiot | undefined, action: Action): IRiot {
  return reducer(state, action);
}
