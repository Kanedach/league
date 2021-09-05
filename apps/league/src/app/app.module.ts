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

@NgModule({
  declarations: [AppComponent, SummonerSearchComponent],
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
    ReactiveFormsModule
  ],
  providers: [RiotFacadeService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
