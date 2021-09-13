import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {SuiModule} from 'ng2-semantic-ui';
import {SummonerSearchComponent} from './riot/summoner-search/summoner-search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RiotEffects} from "./store/effects/riot.effects";
import {RiotFacadeService} from "./store/riot.facade.service";
import {riotReducer} from "./store/reducers/riot.reducer";
import {SummonerComponent} from './riot/summoner/summoner.component';
import {ChampionMasteriesComponent} from './riot/champion-masteries/champion-masteries.component';
import {LeagueComponent} from './riot/league/league.component';
import {MatchListComponent} from './riot/match-list/match-list.component';
import {conditionalModules, conditionalProviders} from "../environments/environment";
import {RiftPipe} from './riot/league/rift.pipe';
import {QueuePipe} from './riot/match-list/queue.pipe';
import {CampionMasteriesComponent} from './page/campion-masteries/campion-masteries.component';
import {SearchComponent} from './page/search/search.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './lib/header/header.component';


@NgModule({
  declarations: [AppComponent,
    SummonerSearchComponent,
    SummonerComponent,
    ChampionMasteriesComponent,
    LeagueComponent,
    MatchListComponent,
    RiftPipe,
    QueuePipe,
    CampionMasteriesComponent,
    SearchComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SuiModule,
    StoreModule.forRoot({riot: riotReducer}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([RiotEffects]),
    ReactiveFormsModule,
    ...conditionalModules,
    RouterModule,
    AppRoutingModule
  ],
  providers: [RiotFacadeService, HttpClientModule],
  bootstrap: [AppComponent],
  ...conditionalProviders
})
export class AppModule {
}
