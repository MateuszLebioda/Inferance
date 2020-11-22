import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FactMainComponent} from './components/fact/fact-main/fact-main.component';
import {RuleMainComponent} from './components/rules/rules-main/rule-main.component';
import {ConclusionMainComponent} from './components/conclusions/conclusion-main/conclusion-main.component';


const routes: Routes = [
  { path: 'fact', component: FactMainComponent },
  { path: 'rule', component: RuleMainComponent },
  { path: 'conclusion', component: ConclusionMainComponent },
  { path: '',   redirectTo: 'fact', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
