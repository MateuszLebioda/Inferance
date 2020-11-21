import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { MainComponent } from './components/main/main.component';
import { FactMainComponent } from './components/fact/fact-main/fact-main.component';
import { RuleMainComponent } from './components/rules/rules-main/rule-main.component';
import { ConclusionMainComponent } from './components/conclusions/conclusion-main/conclusion-main.component';

@NgModule({
  declarations: [
    MainComponent,
    FactMainComponent,
    RuleMainComponent,
    ConclusionMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
