import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AsyncStoreModel, IRiot} from "../reducers/riot.reducer";
import {
  Champion,
  ChampionMastery,
  DDChampion,
  LeagueEntries,
  MatchInformationAdded,
  MatchList
} from "@league/api-interfaces";
import {AddQueueInformation} from "../../riot/lib/add-queue-information";
import {PrepareMatchList} from "../../riot/prepare-match-list";

const prepareMatchList = new PrepareMatchList;

export const getRiot = createFeatureSelector<IRiot>('riot');
export const summoner = createSelector(getRiot, (state) => state.summoner);
export const champions = createSelector(getRiot, (state) => state.champions);
export const matchList = createSelector(getRiot, (state) => state.matchList);
export const league = createSelector(getRiot, (state) => state.league);
export const championMasterie = createSelector(getRiot, (state) => state.championMasteries);

export const getSummonerName = createSelector(summoner, (state) => {
  if (state.data !== null) {
    return state.data
  } else { return null }
});
export const getLeague = createSelector(league, (state): LeagueEntries[] | null | undefined => state.data);

export const getChampionMasteries = createSelector(
  championMasterie,
  champions,
  (championMasteries: AsyncStoreModel<ChampionMastery[]> | null, champions: DDChampion |null): ChampionMastery[] =>

    championMasteries!.data!.map(o => {
    if (champions?.data !== null && champions?.data !== undefined) {
      return {
        ...o,
        champion: champions?.data.find(c => c.key === o.championId.toString()) ?? null
      }
    }
    return {
      ...o
    }
  }));
export const getMatchList = createSelector(matchList, (state): MatchList | null => {
  const addQueueInformation = new AddQueueInformation();
  if (state.data !== null) {
    return {
      startIndex: state.data.startIndex,
      endIndex: state.data.endIndex,
      totalGames: state.data.totalGames,
      // @ts-ignore
      matches: addQueueInformation.addQue(state.data.matches)
    }
  }
  return null;
});
export const getChampions = createSelector(champions, (state): Champion[] | null | undefined => state?.data);
export const allGameIds = createSelector(matchList, (state): string[] | null | undefined => state.data?.matches.map(o => o.gameId.toString()));
export const matches = createSelector(matchList, champions, (state, champions): MatchInformationAdded => ({
  // @ts-ignore
  endIndex: state.data?.endIndex,
  // @ts-ignore
  startIndex: state.data?.startIndex,
  // @ts-ignore
  totalGames: state.data?.totalGames,
  // @ts-ignore
  matches: state.data?.matches.map(matches => ({
    gameCreation: matches.matchInformation?.gameCreation,
    // @ts-ignore
    participantId: matches.matchInformation.participantIdentities.find(summoner => summoner.player.summonerName === "Kanedach").participantId,
    // @ts-ignore
    Won: prepareMatchList.weWon(matches.matchInformation.participantIdentities.find(summoner => summoner.player.summonerName === "Kanedach").participantId, matches),
    match: prepareMatchList.teamList(matches, champions)
  }))
}))
