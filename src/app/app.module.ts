import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add/add-admin/add-admin.component';
import { AddFormeeComponent } from './components/add/add-formee/add-formee.component';
import { AddFormateurComponent } from './components/add/add-formateur/add-formateur.component';
import { AddFormationComponent } from './components/add/add-formation/add-formation.component';
import { AddStagiereComponent } from './components/add/add-stagiere/add-stagiere.component';
import { AddSalleComponent } from './components/add/add-salle/add-salle.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayFormeeComponent } from './components/display/display-formee/display-formee.component';
import { DisplayFormateurComponent } from './components/display/display-formateur/display-formateur.component';
import { DisplayFormationComponent } from './components/display/display-formation/display-formation.component';
import { DisplaystagiereComponent } from './components/display/displaystagiere/displaystagiere.component';
import { DisplaySalleComponent } from './components/display/display-salle/display-salle.component';
import { HttpClientModule } from "@angular/common/http";
import { FixeComponent } from './components/fixe/fixe.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddAdminComponent,
    AddFormeeComponent,
    AddFormateurComponent,
    AddFormationComponent,
    AddStagiereComponent,
    AddSalleComponent,
    DashboardComponent,
    DisplayFormeeComponent,
    DisplayFormateurComponent,
    DisplayFormationComponent,
    DisplaystagiereComponent,
    DisplaySalleComponent,
    FixeComponent,

    SignupComponent,

    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
   // InMemoryWebApiModule.forRoot(DataService)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
