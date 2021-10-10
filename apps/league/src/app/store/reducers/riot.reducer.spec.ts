import { IRiot, initRiot, riotReducer } from './riot.reducer';
import * as riotActions from '../actions/riot.actions';

describe('Riot reducer', () => {
  describe('summoner', () => {
    it('should fetch summoner', () => {
      //give
      const expectedState: IRiot = {
        ...initRiot,
        summoner: {
          isLoading: true,
          data: null,
        },
      };
      const action = riotActions.fetchSummonerName({
        summonerName: 'kanedachkanedach',
      });
      const actualState = riotReducer(initRiot, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should store summoner', () => {
      //give
      const expectedState: IRiot = {
        ...initRiot,
        summoner: {
          isLoading: false,
          data: {
            id: '8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA',
            accountId: 'WCAFZP560xtOgvulwyun4lA-J8nyTCIABhbu_lawD9NVjg',
            puuid: 'jkJsPXuOhGfcwuSLTf017Hn3LH5vlGC3yPrylsdmYuRm0M3RVBQXVKA8WoQavwoQv-8MuXKOQB1q3g',
            name: 'Kanedach',
            profileIconId: 4569,
            revisionDate: 1630531090000,
            summonerLevel: 301,
          },
        },
      };
      const action = riotActions.fetchedSummoner({
        summoner: {
          id: '8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA',
          accountId: 'WCAFZP560xtOgvulwyun4lA-J8nyTCIABhbu_lawD9NVjg',
          puuid: 'jkJsPXuOhGfcwuSLTf017Hn3LH5vlGC3yPrylsdmYuRm0M3RVBQXVKA8WoQavwoQv-8MuXKOQB1q3g',
          name: 'Kanedach',
          profileIconId: 4569,
          revisionDate: 1630531090000,
          summonerLevel: 301,
        },
      });
      // when
      const actualState = riotReducer(initRiot, action);
      // than
      expect(actualState).toStrictEqual(expectedState);
    });
  });

  describe('championMasterie', () => {
    it('should fetch championMasterie', () => {
      //give
      const expectedState: IRiot = {
        ...initRiot,
        championMasteries: {
          isLoading: true,
          data: [],
        },
      };
      const action = riotActions.fetchChampionMasteries({
        summonersId: 'sddasdasd',
      });
      const actualState = riotReducer(initRiot, action);
      expect(actualState).toStrictEqual(expectedState);
    });

    it('should store championMasterie', () => {
      //give
      const expectedState: IRiot = {
        ...initRiot,
        championMasteries: {
          isLoading: false,
          data: [
            {
              championId: 6,
              championLevel: 7,
              championPoints: 408443,
              lastPlayTime: 1630506850000,
              championPointsSinceLastLevel: 386843,
              championPointsUntilNextLevel: 0,
              chestGranted: true,
              tokensEarned: 0,
              summonerId: '8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA',
            },
          ],
        },
      };
      const action = riotActions.fetchedChampionMasteries({
        championMastery: [
          {
            championId: 6,
            championLevel: 7,
            championPoints: 408443,
            lastPlayTime: 1630506850000,
            championPointsSinceLastLevel: 386843,
            championPointsUntilNextLevel: 0,
            chestGranted: true,
            tokensEarned: 0,
            summonerId: '8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA',
          },
        ],
      });
      // when
      const actualState = riotReducer(initRiot, action);
      // than
      expect(actualState).toStrictEqual(expectedState);
    });
  });

  describe('champions', () => {
    it('should store champions', () => {
      //give
      const expectedState: IRiot = {
        ...initRiot,
        champions: {
          version: '11.17.1',
          format: 'standAloneComplex',
          type: 'champion',
          data: [
            {
              version: '11.17.1',
              id: 'Aatrox',
              key: '266',
              name: 'Aatrox',
              title: 'Die Klinge der Düsteren',
              blurb:
                'Einst waren Aatrox und seine Brüder ehrenhafte Verteidiger Shurimas gegen die Leere, die zu einer noch größeren Bedrohung für Runeterra wurden und schließlich nur durch hinterlistige, sterbliche Zauberei besiegt werden konnten. Aber nach Jahrhunderten...',
              info: {
                attack: 8,
                defense: 4,
                magic: 3,
                difficulty: 4,
              },
              image: {
                full: 'Aatrox.png',
                sprite: 'champion0.png',
                group: 'champion',
                x: 0,
                y: 0,
                w: 48,
                h: 48,
              },
              tags: ['Fighter', 'Tank'],
              partype: 'Blutbrunnen',
              stats: {
                hp: 580,
                hpperlevel: 90,
                mp: 0,
                mpperlevel: 0,
                movespeed: 345,
                armor: 38,
                armorperlevel: 3.25,
                spellblock: 32,
                spellblockperlevel: 1.25,
                attackrange: 175,
                hpregen: 3,
                hpregenperlevel: 1,
                mpregen: 0,
                mpregenperlevel: 0,
                crit: 0,
                critperlevel: 0,
                attackdamage: 60,
                attackdamageperlevel: 5,
                attackspeedperlevel: 2.5,
                attackspeed: 0.651,
              },
            },
          ],
        },
      };

      const action = riotActions.fetchedChampions({
        ddChampions: {
          version: '11.17.1',
          format: 'standAloneComplex',
          type: 'champion',
          data: [
            {
              version: '11.17.1',
              id: 'Aatrox',
              key: '266',
              name: 'Aatrox',
              title: 'Die Klinge der Düsteren',
              blurb:
                'Einst waren Aatrox und seine Brüder ehrenhafte Verteidiger Shurimas gegen die Leere, die zu einer noch größeren Bedrohung für Runeterra wurden und schließlich nur durch hinterlistige, sterbliche Zauberei besiegt werden konnten. Aber nach Jahrhunderten...',
              info: {
                attack: 8,
                defense: 4,
                magic: 3,
                difficulty: 4,
              },
              image: {
                full: 'Aatrox.png',
                sprite: 'champion0.png',
                group: 'champion',
                x: 0,
                y: 0,
                w: 48,
                h: 48,
              },
              tags: ['Fighter', 'Tank'],
              partype: 'Blutbrunnen',
              stats: {
                hp: 580,
                hpperlevel: 90,
                mp: 0,
                mpperlevel: 0,
                movespeed: 345,
                armor: 38,
                armorperlevel: 3.25,
                spellblock: 32,
                spellblockperlevel: 1.25,
                attackrange: 175,
                hpregen: 3,
                hpregenperlevel: 1,
                mpregen: 0,
                mpregenperlevel: 0,
                crit: 0,
                critperlevel: 0,
                attackdamage: 60,
                attackdamageperlevel: 5,
                attackspeedperlevel: 2.5,
                attackspeed: 0.651,
              },
            },
          ],
        },
      });
      // when
      const actualState = riotReducer(initRiot, action);
      // than
      expect(actualState).toStrictEqual(expectedState);
    });
  });
});
