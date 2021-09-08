import {Injectable} from "@angular/core";
import * as summoner from "./json/summoner.get.json";
import * as championMastery from "./json/champion-masteries.get.json";
import * as league from "./json/league.json";
import * as matchList from "./json/match-list.json";
import {MockedDataInterceptor} from "../mocked-data.interceptor";

@Injectable()
export class RiotApiMockInterceptor extends MockedDataInterceptor {
  constructor() {

    super(new RegExp('/api/'), [
      {
        urlRegExp: /summoner/,
        computedBody: () => {
          return summoner;
        }
      },
      {
        urlRegExp: /champion-masteries/,
        computedBody: () => {
          return championMastery;
        }
      },
      {
        urlRegExp: /league/,
        computedBody: () => {
          return league;
        }
      },
      {
        urlRegExp: /match-list/,
        computedBody: () => {
          return matchList;
        }
      }
    ])
  }
}
