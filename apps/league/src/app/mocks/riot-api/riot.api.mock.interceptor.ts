import {Injectable} from "@angular/core";
import summoner from "./json/summoner.get.json";
import championMastery from "./json/champion-masteries.get.json";
import league from "./json/league.json";
import matchList from "./json/match-list.json";
import {MockedDataInterceptor} from "../mocked-data.interceptor";

@Injectable()
export class RiotApiMockInterceptor extends MockedDataInterceptor {
  constructor() {

    super(new RegExp('/api/'), [
      {
        urlRegExp: /summoner/,
        method: "GET",
        computedBody: () => {
          return summoner;
        }
      },
      {
        urlRegExp: /champion-masteries/,
        method: "GET",
        computedBody: () => {
          return championMastery;
        }
      },
      {
        urlRegExp: /league/,
        method: "GET",
        computedBody: () => {
          return league;
        }
      },
      {
        urlRegExp: /match-list/,
        method: "GET",
        computedBody: () => {
          return matchList;
        }
      }
    ])
  }
}
