import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AdminComponent } from './admin/admin.component';
import { AloginComponent } from './alogin/alogin.component';
import { ApplicationsComponent } from './applications/applications.component';
import { CloginComponent } from './clogin/clogin.component';
import { CreditsComponent } from './credits/credits.component';
import { CsignupComponent } from './csignup/csignup.component';
import { MasterComponent } from './master/master.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AuthGuard}from './auth.guard';
import{AdminauthGuard}from './adminauth.guard';
import { CreditGuard } from './credit.guard';
import { MasterGuard } from './master.guard';
import { AccountGuard } from './account.guard';

const routes: Routes = [{path:"",component:WelcomeComponent},{path:"alogin",component:AloginComponent},{path:"clogin",component:CloginComponent},{path:"csignup",component:CsignupComponent},
{path:"admin",component:AdminComponent,canActivate:[AdminauthGuard],
children:[
{path:'master',component:MasterComponent,canActivate:[MasterGuard]},
{path:'credits',component:CreditsComponent,canActivate:[CreditGuard]},
{path:'accounts',component:AccountsComponent,canActivate:[AccountGuard]}]},
{path:"user",component:UserNavComponent,canActivate:[AuthGuard],
children:[
{path:"services",component:ServicesComponent},
{path:"applications",component:ApplicationsComponent},
{path:"profile",component:ProfileComponent}]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
