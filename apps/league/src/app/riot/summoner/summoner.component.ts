import {Component, Input, OnInit} from '@angular/core';
import {RiotFacadeService} from "../../store/riot.facade.service";
import {Observable} from "rxjs";
import {Summoner} from "@league/api-interfaces";

@Component({
  selector: 'league-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {

  @Input() summoner: Summoner | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
