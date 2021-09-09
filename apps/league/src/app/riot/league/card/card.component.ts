import {Component, Input, OnInit} from '@angular/core';
import {LeagueEntries} from "@league/api-interfaces";

@Component({
  selector: 'league-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() league: LeagueEntries[] | undefined | null

  constructor() { }

  ngOnInit(): void {
  }

}
