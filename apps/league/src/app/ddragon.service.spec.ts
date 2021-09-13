import {DDragonService} from './ddragon.service';
import {of} from "rxjs";

describe('DdragonService', () => {
  it('get champion', done => {
    const champion = [
      {
        "version": "11.17.1",
        "id": "Aatrox",
        "key": "266",
        "name": "Aatrox",
        "title": "Die Klinge der Düsteren",
        "blurb": "Einst waren Aatrox und seine Brüder ehrenhafte Verteidiger Shurimas gegen die Leere, die zu einer noch größeren Bedrohung für Runeterra wurden und schließlich nur durch hinterlistige, sterbliche Zauberei besiegt werden konnten. Aber nach Jahrhunderten...",
        "info": {
          "attack": 8,
          "defense": 4,
          "magic": 3,
          "difficulty": 4
        },
        "image": {
          "full": "Aatrox.png",
          "sprite": "champion0.png",
          "group": "champion",
          "x": 0,
          "y": 0,
          "w": 48,
          "h": 48
        },
        "tags": [
          "Fighter",
          "Tank"
        ],
        "partype": "Blutbrunnen",
        "stats": {
          "hp": 580,
          "hpperlevel": 90,
          "mp": 0,
          "mpperlevel": 0,
          "movespeed": 345,
          "armor": 38,
          "armorperlevel": 3.25,
          "spellblock": 32,
          "spellblockperlevel": 1.25,
          "attackrange": 175,
          "hpregen": 3,
          "hpregenperlevel": 1,
          "mpregen": 0,
          "mpregenperlevel": 0,
          "crit": 0,
          "critperlevel": 0,
          "attackdamage": 60,
          "attackdamageperlevel": 5,
          "attackspeedperlevel": 2.5,
          "attackspeed": 0.651
        }
      }];
    const httpMock = {
      get: jest.fn().mockReturnValue(of(champion))
    };
    const serviceMock = new DDragonService(httpMock as any);
    serviceMock.getDDragonChampion().subscribe(
      (data) => {
        expect(httpMock.get).toBeDefined();
        expect(httpMock.get).toHaveBeenCalled();
        expect(serviceMock.getDDragonChampion).toBeDefined()
        expect(data).toEqual(champion);
        done();
      }
    )
  });
});

