import { Component, OnInit } from '@angular/core';
import { RiotFacadeService } from '../../store/riot.facade.service';
import { Observable } from 'rxjs';
import { ChampionMastery, LeagueEntries, MatchInformationAdded, Summoner } from '@league/api-interfaces';

@Component({
  selector: 'league-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public summoner$: Observable<Summoner | null> | undefined;
  public championMastery$: Observable<ChampionMastery[] | null> | undefined;
  public league$: Observable<LeagueEntries[] | null> | undefined;
  public matches$: Observable<MatchInformationAdded> | undefined;

  constructor(private riotFacadeService: RiotFacadeService) {}

  ngOnInit(): void {
    this.riotFacadeService.dDragonUi.fetchChampions();
    this.summoner$ = this.riotFacadeService.riotUi.getSummonr();
    this.championMastery$ = this.riotFacadeService.riotUi.getChampionMasteries();
    this.league$ = this.riotFacadeService.riotUi.getLeague();
    this.matches$ = this.riotFacadeService.riotUi.getMatches();
  }
}
