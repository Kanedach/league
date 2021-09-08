export interface DDragonRealms {
  n: {
    item: string | null;
    rune: string | null;
    mastery: string | null;
    summoner: string | null;
    champion: string | null;
    profileicon: string | null;
    map: string | null;
    language: string | null;
    sticker: string | null;
  },
  v: string | null;
  l: string | null;
  cdn: string | null;
  dd: string | null;
  lg: string | null;
  css: string | null;
  profileiconmax: number | null;
  store: string | null;
}

export interface DDChampDto {
  type: string | null;
  format: string | null;
  version: string | null;
  data: any | null;
}

export interface DDChampion {
  type: string | null;
  format: string | null;
  version: string | null;
  data: Champion[] | null;
}

export interface Champion {
  version: string | null;
  id: string | null;
  key: string | null;
  name: string | null;
  title: string | null;
  blurb: string | null;
  info: Info | null;
  image: Image | null;
  tags: string[];
  partype: string | null;
  stats: Stats | null;
}

  export interface Info {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  }

  export interface Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }

  export interface Stats {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
  }



