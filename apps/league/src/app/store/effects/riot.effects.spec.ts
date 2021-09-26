import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideMockActions} from "@ngrx/effects/testing";
import {RiotService} from "../../riot.service";
import * as riotSelector from "../selectors/riot.selectors";
import {Summoner} from "@league/api-interfaces";
import {cold, hot} from "jasmine-marbles";
import {RiotEffects} from "./riot.effects";

const summoner: Summoner = {
  "id": "8WMyzLo7fF0hb2tnjcBnfXhqkGOKu7coBWF5YDAdDlOUJwA",
  "accountId": "WCAFZP560xtOgvulwyun4lA-J8nyTCIABhbu_lawD9NVjg",
  "puuid": "jkJsPXuOhGfcwuSLTf017Hn3LH5vlGC3yPrylsdmYuRm0M3RVBQXVKA8WoQavwoQv-8MuXKOQB1q3g",
  "name": "Kanedach",
  "profileIconId": 4569,
  "revisionDate": 1630531090000,
  "summonerLevel": 301
}


describe('test', () => {
  let riotEffects: RiotEffects;
  let actions$: Observable<Action>;
  let effect: RiotEffects;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RiotEffects,
        RiotService, provideMockActions(() => actions$), provideMockStore()]
    });
    riotEffects = TestBed.inject(RiotEffects);
  })

  it('should ', () => {
    //arrange

    //act
    actions$ = hot('a', {
      a: summoner
    });

    const expected$ = cold('a', {
      a: summoner
    });

    expect(riotEffects.fetchSummoner).toEqual(expected$)

  });
})
