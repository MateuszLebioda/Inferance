import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { MainComponent } from './components/main/main.component';
import { FactMainComponent } from './components/fact/fact-main/fact-main.component';
import { RuleMainComponent } from './components/rules/rules-main/rule-main.component';
import { ConclusionMainComponent } from './components/conclusions/conclusion-main/conclusion-main.component';
import { SingleFactBuilderComponent } from './components/fact/single-fact-builder/single-fact-builder.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListFactComponent } from './components/fact/list-fact/list-fact.component';
import { SingleRuleBuilderComponent } from './components/rules/single-rule-builder/single-rule-builder.component';
import { SingleRuleRowComponent } from './components/rules/single-rule-row/single-rule-row.component';
import { ListRuleComponent } from './components/rules/list-rule/list-rule.component';
import { ConclusionFactListComponent } from './components/conclusions/conclusion-fact-list/conclusion-fact-list.component';
import { ConclusionRuleListComponent } from './components/conclusions/conclusion-rule-list/conclusion-rule-list.component';
import {BlockUIModule} from 'ng-block-ui';

@NgModule({
  declarations: [
    MainComponent,
    FactMainComponent,
    RuleMainComponent,
    ConclusionMainComponent,
    SingleFactBuilderComponent,
    ListFactComponent,
    SingleRuleBuilderComponent,
    SingleRuleRowComponent,
    ListRuleComponent,
    ConclusionFactListComponent,
    ConclusionRuleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot()
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
