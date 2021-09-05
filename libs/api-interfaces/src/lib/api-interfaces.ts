export interface Message {
  message: string;
}

export interface Summoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export interface ChampionMastery {
  championPointsUntilNextLevel: bigint;
  chestGranted: boolean;
  championId: bigint;
  lastPlayTime: bigint;
  championLevel: number;
  summonerId: string;
  championPoints: number;
  championPointsSinceLastLevel: bigint;
  tokensEarned: number
}

export interface MatchList {
  gameId: bigint;
  role: string;
  season: string;
  platformId: string;
  champion: number;
  queue: number;
  lane: string;
  timestamp: bigint;
}

export interface MatchInformation {
  gameId: bigint;
  participantIdentities: ParticipantIdentityDto[];
  queueId: number;
  gameType: string;
  gameDuration: bigint;
  teams: TeamStatsDto[];
  platformId: string;
  gameCreation: bigint;
  seasonId: number;
  gameVersion: string;
  mapId: number;
  gameMode: string;
  participants: ParticipantDto[];
}

export interface ParticipantIdentityDto {
  participantId: number;
  player: PlayerDto[];
}

export interface PlayerDto{
  profileIcon: number;
  accountId: string;
  matchHistoryUri: string;
  currentAccountId: string;
  currentPlatformId: string;
  summonerName: string;
  summonerId: string;
  platformId: string;
}

export interface TeamStatsDto {
  towerKills: number;
  riftHeraldKills: number;
  firstBlood: boolean;
  inhibitorKills: number;
  bans: TeamBansDto[];
  firstBaron: boolean;
  firstDragon: boolean;
  dominionVictoryScore: number;
  dragonKills: number;
  baronKills: number;
  firstInhibitor: boolean;
  firstTower: boolean;
  vilemawKills: number;
  firstRiftHerald: boolean;
  teamId: number;
  win: string;
}

export interface TeamBansDto {
  championId: number;
  pickTurn: number;
}

export interface ParticipantDto {
  participantId: number;
  championId: number;
  runes: RuneDto[];
  stats: ParticipantStatsDto[];
  teamId: number;
  timeline: ParticipantTimelineDto[];
  spell1Id: number;
  spell2Id: number;
  highestAchievedSeasonTier: string;
  masteries: MasteryDto[];
}

export interface RuneDto {
  runeId: number;
  rank: number;
}

export interface ParticipantStatsDto {
  participantId: number;
  win: boolean;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  kills: number;
  deaths: number;
  assists: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  killingSprees: number;
  longestTimeSpentLiving: number;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  unrealKills: number;
  totalDamageDealt: bigint;
  magicDamageDealt: bigint;
  physicalDamageDealt: bigint;
  trueDamageDealt: bigint;
  largestCriticalStrike: number;
  totalDamageDealtToChampions: bigint;
  magicDamageDealtToChampions: bigint;
  physicalDamageDealtToChampions: bigint;
  trueDamageDealtToChampions: bigint;
  totalHeal: bigint;
  totalUnitsHealed: bigint;
  damageSelfMitigated: bigint;
  damageDealtToObjectives: bigint;
  damageDealtToTurrets: bigint;
  visionScore: bigint;
  timeCCingOthers: number;
  totalDamageTaken: bigint;
  magicalDamageTaken: bigint;
  physicalDamageTaken: bigint;
  trueDamageTaken: bigint;
  goldEarned: number;
  goldSpent: number;
  turretKills: number;
  inhibitorKills: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  totalTimeCrowdControlDealt: number;
  champLevel: number;
  visionWardsBoughtInGame: number;
  sightWardsBoughtInGame: number;
  firstBloodKill: boolean;
  firstBloodAssist: boolean;
  firstTowerKill: boolean;
  firstTowerAssist: boolean;
  firstInhibitorKill: boolean;
  firstInhibitorAssist: boolean;
  combatPlayerScore: number;
  objectivePlayerScore: number;
  totalPlayerScore: number;
  totalScoreRank: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  perk0: number;
  perk0Var1: number;
  perk0Var2: number;
  perk0Var3: number;
  perk1: number;
  perk1Var1: number;
  perk1Var2: number;
  perk1Var3: number;
  perk2: number;
  perk2Var1: number;
  perk2Var2: number;
  perk2Var3: number;
  perk3: number;
  perk3Var1: number;
  perk3Var2: number;
  perk3Var3: number;
  perk4: number;
  perk4Var1: number;
  perk4Var2: number;
  perk4Var3: number;
  perk5: number;
  perk5Var1: number;
  perk5Var2: number;
  perk5Var3: number;
  perkPrimaryStyle: number;
  perkSubStyle: number;
  statPerk0: number;
  statPerk1: number;
  statPerk2: number;
}

export interface ParticipantTimelineDto {
  participantId: number;
  role: string;
  lane: string;
  csDiffPerMinDeltas: any;
  damageTakenPerMinDeltas: any;
  damageTakenDiffPerMinDeltas: any;
  xpPerMinDeltas: any;
  xpDiffPerMinDeltas: any;
  creepsPerMinDeltas: any;
  goldPerMinDeltas: any;
}

export interface MasteryDto {
  rank: number;
  masteryId: number;
}

export interface LeagueEntries {
  leagueId?: string;
  summonerId?: string;
  summonerName?: string;
  queueType?: string;
  tier?: string;
  rank?: string;
  leaguePoints?: number;
  wins?: string;
  losses?: string;
  hotStreak?: boolean;
  veteran?:boolean;
  freshBlood?: boolean;
  inactive?: boolean;
  miniSeries?: MiniSeriesDTO[];
}

export interface MiniSeriesDTO {
  losses: number;
  progress: string;
  target: number;
  wins: number
}
