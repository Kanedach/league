import { Match, MatchInformation, MatchList } from '@league/api-interfaces';

export class AddMatchToMatchList {
  addMatchToMatchList(matchList: Match[], matchInformation: MatchInformation): Match[] {
    const index = matchList.findIndex((match) => match.gameId === matchInformation.gameId);
    return [
      ...matchList.slice(0, index),
      {
        ...matchList[index],
        matchInformation,
      },
      ...matchList.slice(index + 1),
    ];
  }
}
