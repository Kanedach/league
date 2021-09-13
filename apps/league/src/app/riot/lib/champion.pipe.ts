import { Pipe, PipeTransform } from '@angular/core';
import {Champion} from "@league/api-interfaces";
import {Observable} from "rxjs";
import {RiotFacadeService} from "../../store/riot.facade.service";
import {find, tap} from "rxjs/operators";

@Pipe({
  name: 'champion'
})
export class ChampionPipe implements PipeTransform {

  public champion$: Observable<Champion[]>
  public championName: string | unknown;

  constructor(private riotFacadeService: RiotFacadeService) {
    // @ts-ignore
    this.champion$ = this.riotFacadeService.dDragonUi.getChampions()
  }

  transform(championId: number): string {
    return ''
  }

}
