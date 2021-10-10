import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AsyncStoreModel, IRiot } from '../reducers/riot.reducer';
import {
  Champion,
  ChampionMastery,
  DDChampion,
  LeagueEntries,
  Match,
  MatchInformationAdded,
  MatchInformationAddedMatches,
  MatchList,
  ParticipantIdentityDto, PlayerDto, Summoner,
} from '@league/api-interfaces';
import { AddQueueInformation } from '../../riot/lib/add-queue-information';
import { PrepareMatchList } from '../../riot/prepare-match-list';

const prepareMatchList = new PrepareMatchList();

export const getRiot = createFeatureSelector<IRiot>('riot');
export const summoner = createSelector(getRiot, (state:IRiot): AsyncStoreModel<Summoner> => state.summoner);
export const champions = createSelector(getRiot, (state:IRiot): DDChampion | null => state.champions);
export const matchList = createSelector(getRiot, (state: IRiot): AsyncStoreModel<MatchList> => state.matchList);
export const league = createSelector(getRiot, (state: IRiot): AsyncStoreModel<LeagueEntries[]> => state.league);
export const championMasterie = createSelector(getRiot, (state: IRiot): AsyncStoreModel<ChampionMastery[]> => state.championMasteries);
export const matchData = createSelector(matchList, (state: AsyncStoreModel<MatchList>): MatchList | null => {
  if (state.data) {
    return state.data;
  }
  return null;
});

export const getSummonerName = createSelector(summoner, (state:AsyncStoreModel<Summoner>): Summoner | null => {
  if (state.data) {
    return state.data;
  } else {
    return null;
  }
});
export const getLeague = createSelector(league, (state: AsyncStoreModel<LeagueEntries[]>): LeagueEntries[] => state.data ?? []);

export const getChampionMasteries = createSelector(
  championMasterie,
  champions,
  (championMasteries: AsyncStoreModel<ChampionMastery[]>, champions: DDChampion | null): ChampionMastery[] =>
    championMasteries?.data?.map((o: ChampionMastery): ChampionMastery => {
      if (champions?.data) {
        return {
          ...o,
          champion: champions?.data.find((c: Champion) => c.key === o.championId.toString()) ?? null,
        };
      }
      return {
        ...o,
      };
    }) ?? []
);
export const getChampions = createSelector(champions, (state: DDChampion | null): Champion[] => state?.data ?? []);
export const allGameIds = createSelector(matchList, (state: AsyncStoreModel<MatchList>): string[]  =>
  state.data?.matches?.map((o: Match) => o.gameId.toString()) ?? []
);
export const matches = createSelector(matchData, champions, (matchData: MatchList | null, champions: DDChampion | null): MatchInformationAdded => {
    return {
      version: champions?.version ?? null,
      endIndex: matchData?.endIndex ?? null,
      startIndex: matchData?.startIndex ?? null,
      totalGames: matchData?.totalGames ?? null,
      matches:
        matchData?.matches.map(
          (match: Match): MatchInformationAddedMatches => {
            const matchInfiormation = match.matchInformation;
            return {
              gameCreation: matchInfiormation?.gameCreation ?? null,
              participantId: 0,
              Won: prepareMatchList.weWon(9, match),
              queueId: matchInfiormation?.queueId ?? null,
              gameDuration: matchInfiormation?.gameDuration ?? null,
              gameMode: matchInfiormation?.gameMode ?? null,
              mapId: matchInfiormation?.mapId ?? null,
              gameType: matchInfiormation?.gameType ?? null,
              match: prepareMatchList.teamList(match, champions),
            }
          }
        ) ?? [],
    };
});
