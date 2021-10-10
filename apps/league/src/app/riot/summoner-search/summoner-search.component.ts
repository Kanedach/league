import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RiotFacadeService } from '../../store/riot.facade.service';

@Component({
  selector: 'league-summoner-search',
  templateUrl: './summoner-search.component.html',
  styleUrls: ['./summoner-search.component.scss'],
})
export class SummonerSearchComponent {
  summonersForm = this.formBuilder.group({
    name: ['', [Validators.minLength(3), Validators.required, Validators.nullValidator]],
    region: ['', Validators.maxLength(3)],
  });

  constructor(private formBuilder: FormBuilder, private riotFacadeService: RiotFacadeService) {}

  onSubmit(): void {
    this.riotFacadeService.riotUi.fetchSummonerName(this.summonersForm.value['name']);
    this.summonersForm.reset();
  }
}
