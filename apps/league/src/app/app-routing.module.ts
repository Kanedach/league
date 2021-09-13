import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {SearchComponent} from "./page/search/search.component";
import {CampionMasteriesComponent} from "./page/campion-masteries/campion-masteries.component";

const routes: Routes = [
  {path: '', component: SearchComponent},
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
