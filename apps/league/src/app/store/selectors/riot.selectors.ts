import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IRiot} from "../reducers/riot.reducer";
import {Champion, ChampionMastery, LeagueEntries, MatchList, Summoner} from "@league/api-interfaces";

export const getRiot = createFeatureSelector<IRiot>('riot')

export const getSummonerName = createSelector(getRiot, (state): Summoner => state.summoner.summoner);
export const getLeague = createSelector(getRiot, (state): LeagueEntries[] | null | undefined => state.league.league);
export const getChampionMasteries = createSelector(getRiot, (state): ChampionMastery[] =>
  state.championMasteries.championMasteries.map(o => {
    if (state.champions?.data !==  null && state.champions?.data !== undefined)
    {return {
        ...o,
        // @ts-ignore
        champion: state.champions.data.find(c => c.key === o.championId.toString())
      }
    }
      return {
        ...o
      }

  }));
export const getMatchList = createSelector(getRiot, (state): MatchList | null => state.matchList.matchList)
export const getChampions = createSelector(getRiot, (state): Champion[] | null | undefined => state.champions?.data);
