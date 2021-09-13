import {Injectable} from "@angular/core";
import summoner from "./json/summoner.get.json";
import championMastery from "./json/champion-masteries.get.json";
import league from "./json/league.json";
import matchList from "./json/match-list.json";
import match5441454364 from "./json/match-5441454364.json"
import match5440470518 from "./json/match-5440470518.json"
import match5439783966 from "./json/match-5439783966.json"
import match5436712046 from "./json/match-5436712046.json"
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
      },
      {
        urlRegExp: /match\/5441454364/,
        method: "GET",
        computedBody: () => {
          return match5441454364
        }
      },
      {
        urlRegExp: /match\/5436712046/,
        method: "GET",
        computedBody: () => {
          return match5436712046
        }
      },
      {
        urlRegExp: /match\/5439783966/,
        method: "GET",
        computedBody: () => {
          return match5439783966
        }
      },
      {
        urlRegExp: /match\/5440470518/,
        method: "GET",
        computedBody: () => {
          return match5440470518
        }
      }
    ])
  }
}
