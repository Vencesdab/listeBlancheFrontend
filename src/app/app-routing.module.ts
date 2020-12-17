import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { ProfilComponent } from './modules/general/profil/profil.component';
import { MailComponent } from './modules/general/mail/mail.component';
import { SingleMailComponent } from './modules/general/single-mail/single-mail.component';
import { LoginComponent } from './modules/general/login/login.component';
import { CreateAccountComponent } from './modules/general/create-account/create-account.component';
import { CaptchaComponent } from './modules/general/captcha/captcha.component';
import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { ListComponent } from './modules/general/list/list.component';
import { HelpComponent } from './modules/general/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'mail', component: MailComponent },
  { path: 'single-mail', component: SingleMailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'verify/:id', component: CaptchaComponent },
  { path: 'base', component: BaseComponentComponent },
  { path : 'list', component: ListComponent },
  { path : 'help', component: HelpComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
