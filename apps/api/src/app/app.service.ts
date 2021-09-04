import { Injectable } from '@nestjs/common';
import {Message, Summoner} from '@league/api-interfaces';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {HttpService} from "@nestjs/axios";
import {AxiosResponse} from "axios";

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getSummoner(summonerName: string):  Observable<AxiosResponse<Summoner>>{
    return this.httpService.get<any>(environment.riot_api_euw_url + '/lol/summoner/v4/summoners/by-name/'+summonerName.toLowerCase(), {headers: {
        'X-Riot-Token': environment.riot_api_token
      }}
    );
  }

}
