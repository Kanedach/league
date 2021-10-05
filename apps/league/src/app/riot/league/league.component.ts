import {Component, Input, OnInit} from '@angular/core';
import {LeagueEntries} from "@league/api-interfaces";

@Component({
  selector: 'league-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  @Input() league: LeagueEntries[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
