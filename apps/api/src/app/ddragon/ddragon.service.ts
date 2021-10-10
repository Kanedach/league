import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { DDChampDto, DDragonRealms } from '../../../../../libs/api-interfaces/src/lib/ddragon-interface';
import { HttpService } from '@nestjs/axios';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DDragonService {
  constructor(private httpService: HttpService) {}

  getDDragonVersion(): Observable<AxiosResponse<string[]>> {
    return this.httpService.get<string[]>('https://ddragon.leagueoflegends.com/api/versions.json');
  }

  getDDragonChampion(version: string): Observable<AxiosResponse<DDChampDto>> {
    return this.httpService.get<DDChampDto>('http://ddragon.leagueoflegends.com/cdn/' + version + '/data/de_DE/champion.json');
  }

  getChampion(): Observable<any> {
    return this.httpService
      .get<DDragonRealms>('https://ddragon.leagueoflegends.com/realms/euw.json')
      .pipe(
        mergeMap((source) =>
          this.httpService.get<DDChampDto>('http://ddragon.leagueoflegends.com/cdn/' + source.data.n.champion + '/data/de_DE/champion.json')
        )
      );
  }
}
