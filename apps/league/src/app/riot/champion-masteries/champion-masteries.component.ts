import { Component, OnInit } from '@angular/core';
import {ChampionMastery, Summoner} from "@league/api-interfaces";
import {Observable} from "rxjs";
import {RiotFacadeService} from "../../store/riot.facade.service";

@Component({
  selector: 'league-champion-masteries',
  templateUrl: './champion-masteries.component.html',
  styleUrls: ['./champion-masteries.component.scss']
})
export class ChampionMasteriesComponent implements OnInit {

  public championMasteries$: Observable<ChampionMastery[]>;

  constructor(private riotFacadeService: RiotFacadeService) {
    this.championMasteries$ = this.riotFacadeService.riotUi.getChampionMasteries();
  }

  ngOnInit(): void {
    this.riotFacadeService.dDragonUi.fetchChampions();
  }

}
