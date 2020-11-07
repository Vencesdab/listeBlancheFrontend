import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ClarityModule} from '@clr/angular';
import { HomeComponent } from './modules/general/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ClarityModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
