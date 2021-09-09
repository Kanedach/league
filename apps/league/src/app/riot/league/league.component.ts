import { Component, OnInit } from '@angular/core';
import {RiotFacadeService} from "../../store/riot.facade.service";
import {Observable} from "rxjs";
import {LeagueEntries} from "@league/api-interfaces";

@Component({
  selector: 'league-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  public league$: Observable<LeagueEntries[]>

  constructor(private riotFacadeService: RiotFacadeService) {
    this.league$ = riotFacadeService.riotUi.getLeague();
  }

  ngOnInit(): void {
  }

}
