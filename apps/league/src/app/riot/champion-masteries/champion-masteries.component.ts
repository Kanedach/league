import { Component, Input, OnInit } from '@angular/core';
import { ChampionMastery } from '@league/api-interfaces';

@Component({
  selector: 'league-champion-masteries',
  templateUrl: './champion-masteries.component.html',
  styleUrls: ['./champion-masteries.component.scss'],
})
export class ChampionMasteriesComponent implements OnInit {
  @Input() championMasteries: ChampionMastery[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
