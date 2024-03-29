import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClarityModule } from '@clr/angular';
import { HomeComponent } from './modules/general/home/home.component';
import { ProfilComponent } from './modules/general/profil/profil.component';
import { MailComponent } from './modules/general/mail/mail.component';
import { SingleMailComponent } from './modules/general/single-mail/single-mail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/general/login/login.component';
import { url } from './config.json';
import { HeaderComponent } from './header/header.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { CreateAccountComponent } from './modules/general/create-account/create-account.component';
import { CaptchaComponent } from './modules/general/captcha/captcha.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { LogCreaComponent } from './log-crea/log-crea.component';
import { StorageService } from './services/storage.service';
import { ListComponent } from './modules/general/list/list.component';
import { HelpComponent } from './modules/general/help/help.component';
import { HistoryComponent } from './modules/general/history/history.component';
import { ForgotPassComponent } from './modules/general/forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfilComponent,
    MailComponent,
    SingleMailComponent,
    LoginComponent,
    HeaderComponent,
    BaseComponentComponent,
    CreateAccountComponent,
    CaptchaComponent,
    LogCreaComponent,
    ListComponent,
    HelpComponent,
    HistoryComponent,
    ForgotPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
