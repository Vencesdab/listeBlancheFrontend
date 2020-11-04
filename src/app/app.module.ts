import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
	ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
