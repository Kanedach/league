import {
  Champion,
  DDChampion,
  Match, MatchInformation, MatchInformationAddedMatch,
  MatchInformationAddedMatches, MatchInformationAddedTeam,
  ParticipantDto, ParticipantIdentityDto, PlayerDto,
  TeamStatsDto
} from '@league/api-interfaces';

export class PrepareMatchList {
  public weWon(participantId: number, match: Match): boolean {
    const teamID: number | null =
      match?.matchInformation?.participants?.find((participants: ParticipantDto): boolean => participants.participantId === participantId)
        ?.teamId ?? null;
    const isWin: boolean =
      match?.matchInformation?.teams?.some((team: TeamStatsDto): boolean => team.teamId === teamID && team.win === 'Win') ?? false;
    return isWin;
  }

  public teamList(match: Match, champions: DDChampion | null): MatchInformationAddedMatch[] {
    if(!champions || !match.matchInformation) { return []}
    const matchInformation: MatchInformation = match.matchInformation;
    return matchInformation.teams.map((team:TeamStatsDto):MatchInformationAddedMatch => {
      return {
        win: team.win,
        teamId: team.teamId,
        team: matchInformation.participants.filter((participant: ParticipantDto): boolean => participant.teamId === team.teamId).map(
          (participant: ParticipantDto): MatchInformationAddedTeam => {
            const champion: Champion | null = champions.data?.find((champion: Champion): boolean => champion.key === `${participant.championId}`) ?? null;
            const championImages: Champion["image"] | null = champion?.image ?? null
            const player: PlayerDto | null = match?.matchInformation?.participantIdentities.find(
              (participantIdentity: ParticipantIdentityDto) => participantIdentity.participantId === participant.participantId)?.player ?? null
            return {
              championId: participant.championId,
              championName: champion?.name ?? null,
              championImage: championImages,
              summonerId: player?.summonerId ?? null,
              summonerName: player?.summonerName ?? null
          }}
        )
      }
    })
  }
}
