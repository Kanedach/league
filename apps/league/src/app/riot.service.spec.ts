import {RiotService} from './riot.service';
import {of} from "rxjs";

describe('Riot Service Test', () => {
  describe('getSummoner', () => {
    it('should return a summoner', done => {
      const summonerName = 'Kanedach';
      const response = {
        "id": "8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA",
        "accountId": "WCAFZP560xtOgvulwyun4lA-J8nyTCIABhbu_lawD9NVjg",
        "puuid": "jkJsPXuOhGfcwuSLTf017Hn3LH5vlGC3yPrylsdmYuRm0M3RVBQXVKA8WoQavwoQv-8MuXKOQB1q3g",
        "name": "Kanedach",
        "profileIconId": 4569,
        "revisionDate": 1630531090000,
        "summonerLevel": 301
      }
      const httpMock = {
        get: jest.fn().mockReturnValue(of(response))
      }
      const serviceMock = new RiotService(httpMock as any);
      serviceMock.getSummoner(summonerName).subscribe((data) => {
        expect(httpMock.get).toBeDefined();
        expect(httpMock.get).toHaveBeenCalled();
        expect(data).toEqual(response);
        done();
      })
    })
  })

  describe('getChampionMasteries', () => {
    it('should return champion masteries', done => {
      const summonerId = '8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA';
      const response = [
        {
          "championId": 6,
          "championLevel": 7,
          "championPoints": 408443,
          "lastPlayTime": 1630506850000,
          "championPointsSinceLastLevel": 386843,
          "championPointsUntilNextLevel": 0,
          "chestGranted": true,
          "tokensEarned": 0,
          "summonerId": "8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA"
        },
        {
          "championId": 8,
          "championLevel": 7,
          "championPoints": 217957,
          "lastPlayTime": 1626900761000,
          "championPointsSinceLastLevel": 196357,
          "championPointsUntilNextLevel": 0,
          "chestGranted": true,
          "tokensEarned": 0,
          "summonerId": "8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA"
        }];

      const httpMock = {
        get: jest.fn().mockReturnValue(of(response))
      }
      const serviceMock = new RiotService(httpMock as any);
      serviceMock.getSummoner(summonerId).subscribe((data) => {
        expect(httpMock.get).toBeDefined();
        expect(httpMock.get).toHaveBeenCalled();
        expect(data).toEqual(response);
        done();
      })
    })
  })
})

