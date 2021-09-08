import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DDChampion} from "@league/api-interfaces";

@Injectable({
  providedIn: 'root'
})
export class DDragonService {

  constructor(private http: HttpClient) {
  }

  public getDDragonChampion(): Observable<DDChampion> {
    return this.http.get<DDChampion>('api/ddragon/champion')
  }
}
