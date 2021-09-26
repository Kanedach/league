import { Component, OnInit } from '@angular/core';
import {RiotFacadeService} from "../../store/riot.facade.service";
import {Observable} from "rxjs";
import {Summoner} from "@league/api-interfaces";

@Component({
  selector: 'league-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {

  public summonerName$: Observable<Summoner | null> | undefined;

  constructor(private riotFacadeService: RiotFacadeService) { }

  ngOnInit(): void {
    this.summonerName$ = this.riotFacadeService.riotUi.getSummonr();
  }

}
