import { Component, OnInit } from '@angular/core';
import {RiotFacadeService} from "../../store/riot.facade.service";
import {Observable} from "rxjs";
import {MatchInformationAdded, MatchList} from "@league/api-interfaces";

@Component({
  selector: 'league-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  public matchs$: Observable<MatchList>;
  public matches$: Observable<MatchInformationAdded>;

  constructor(
    private riotFacadeService: RiotFacadeService) {
    this.matchs$ = this.riotFacadeService.riotUi.getMatchList();
    this.matches$ = this.riotFacadeService.riotUi.getMatches();
  }

  ngOnInit(): void {

  }

}
