import {Component, Input, OnInit} from '@angular/core';
import {MatchInformationAdded, MatchList} from "@league/api-interfaces";

@Component({
  selector: 'league-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {

  @Input() matches: MatchInformationAdded | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

}
