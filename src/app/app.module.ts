import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule,HTTP_INTERCEPTORS }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { WelcomeComponent } from './welcome/welcome.component';
import { CloginComponent } from './clogin/clogin.component';
import { AdminComponent } from './admin/admin.component';
import { CsignupComponent } from './csignup/csignup.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AloginComponent } from './alogin/alogin.component';
import { MasterComponent } from './master/master.component';
import { CreditsComponent } from './credits/credits.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ServicesComponent } from './services/services.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ProfileComponent } from './profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CloginComponent,
    AdminComponent,
    CsignupComponent,
    AdminNavComponent,
    AloginComponent,
    MasterComponent,
    CreditsComponent,
    AccountsComponent,
    UserNavComponent,
    ServicesComponent,
    ApplicationsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatRadioModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
