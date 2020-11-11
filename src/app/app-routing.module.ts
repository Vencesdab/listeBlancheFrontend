import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/general/home/home.component';
import { ProfilComponent } from './modules/general/profil/profil.component';
import { MailComponent } from './modules/general/mail/mail.component';
import { SingleMailComponent } from './modules/general/single-mail/single-mail.component';

const routes: Routes = [
	{ path: '', component: HomeComponent,},
	{ path: 'home', component: HomeComponent,},
	{ path: 'profil', component: ProfilComponent,},
	{ path: 'mail', component: MailComponent,},
	{ path: 'single-mail', component: SingleMailComponent,}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
