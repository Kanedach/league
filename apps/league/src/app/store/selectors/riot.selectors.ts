import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IRiot} from "../reducers/riot.reducer";
import {Champion, ChampionMastery, LeagueEntries, MatchList, Summoner} from "@league/api-interfaces";

export const getRiot = createFeatureSelector<IRiot>('riot')

export const getSummonerName = createSelector(getRiot, (state):Summoner => state.summoner.summoner);
export const getLeague = createSelector(getRiot, (state): LeagueEntries[] => state.league.league);
export const getChampionMasteries = createSelector(getRiot, (state): ChampionMastery[] => state.championMasteries.championMasteries);
export const getMatchList = createSelector(getRiot, (state): MatchList => state.matchList.matchList)
export const getChampions = createSelector(getRiot, (state): Champion[] | null | undefined => state.champions?.data);
