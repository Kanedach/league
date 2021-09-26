import {Champion, DDChampion} from "@league/api-interfaces";

export class PrepareMatchList {

  public weWon(participantId: number, matches: any): boolean {
    const teamID = matches.matchInformation.participants.find((participants: { participantId: number; }) => participants.participantId === participantId).teamId;
    if (matches.matchInformation.teams.find((team: { teamId: any; }) => team.teamId === teamID).win === "Win") {
      return true;
    }
    return false;
  }

  public teamList(matches: any, champions: DDChampion | null): any {
    return Object.values({
      ...matches.matchInformation.teams.map((o: any) => ({
        win: o.win,
        teamId: o.teamId,
        team: matches.matchInformation.participants.filter((p: any) => p.teamId === o.teamId).map((m: any) => ({
          championId: m.championId,
          // @ts-ignore
          championName: champions.data.find(champion => champion.key == m.championId).name,

           championImage: {
             // @ts-ignore
             full: champions.data.find(champion => champion.key == m.championId).image.full,
             // @ts-ignore
             group: champions.data.find(champion => champion.key == m.championId).image.group,
             // @ts-ignore
             sprite: champions.data.find(champion => champion.key == m.championId).image.sprite,
           },
          summonerName: matches.matchInformation.participantIdentities.find((s: any) => s.participantId === m.participantId).player.summonerName,
          summonerId: matches.matchInformation.participantIdentities.find((s: any) => s.participantId === m.participantId).player.summonerId
        }))
      }))
    })
  }
}
