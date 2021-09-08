import { Component, OnInit } from '@angular/core';
import {RiotFacadeService} from "../../store/riot.facade.service";
import {Observable} from "rxjs";
import {MatchList} from "@league/api-interfaces";

@Component({
  selector: 'league-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  public matchs$: Observable<MatchList> | undefined | null

  constructor(private riotFacadeService: RiotFacadeService) { }

  ngOnInit(): void {
    this.matchs$ = this.riotFacadeService.riotUi.getMatchList()
  }

}
