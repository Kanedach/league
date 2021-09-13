import {createAction, props} from "@ngrx/store";
import {
  ChampionMastery,
  DDChampion,
  LeagueEntries,
  MatchInformation,
  MatchList,
  Summoner
} from "@league/api-interfaces";

export const fetchSummonerName = createAction('[Riot] Fetch summoner',
  props<{ summonerName: string }>());
export const fetchedSummoner = createAction('[Riot] Fetched summoner',
  props<{ summoner: Summoner }>());

export const fetchChampionMasteries = createAction('[Riot] Fetch Champion Masteries',
  props<{ summonersId: string }>())
export const fetchedChampionMasteries = createAction('[Riot] Fetched Champion Masteries',
  props<{ championMastery: ChampionMastery[] }>());

export const fetchLeague = createAction('[Riot] Fetch League',
  props<{ summonersId: string }>())
export const fetchedLeague = createAction('[Riot] Fetched League',
  props<{ leagueEntry: LeagueEntries[] }>());

export const fetchMatchList = createAction('[Riot] Fetch Match list',
  props<{ accountId: string }>())
export const fetchedMatchList = createAction('[Riot] Fetched Match list',
  props<{ matchList: MatchList }>());

export const fetchMatchHistory = createAction('[Riot] Fetch Match history',
  props<{ matchId: string }>());
export const fetchedMatchHistory = createAction('[Riot] Fetched Match history',
  props<{ matchInformation: MatchInformation }>());

export const fetchChampions = createAction('[DDragon] Fetch Champions');
export const fetchedChampions = createAction('[DDragon] Fetched Champions',
  props<{ddChampions: DDChampion}>())

export const fetchGame = createAction('[Riot] Fetch Game',
  props<{gameId: string}>());
export const fetchedGame = createAction('[Riot] Fetched Game',
  props<{matchInformation: MatchInformation}>());

export const fetchAllGames = createAction('[Riot] Fetch all Games');


