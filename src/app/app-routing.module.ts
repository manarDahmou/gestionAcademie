import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add/add-admin/add-admin.component';
import { AddFormateurComponent } from './components/add/add-formateur/add-formateur.component';
import { AddFormationComponent } from './components/add/add-formation/add-formation.component';
import { AddFormeeComponent } from './components/add/add-formee/add-formee.component';
import { AddSalleComponent } from './components/add/add-salle/add-salle.component';
import { AddStagiereComponent } from './components/add/add-stagiere/add-stagiere.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayFormateurComponent } from './components/display/display-formateur/display-formateur.component';
import { DisplayFormationComponent } from './components/display/display-formation/display-formation.component';
import { DisplayFormeeComponent } from './components/display/display-formee/display-formee.component';
import { DisplaySalleComponent } from './components/display/display-salle/display-salle.component';
import { DisplaystagiereComponent } from './components/display/displaystagiere/displaystagiere.component';
import { FixeComponent } from './components/fixe/fixe.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:'acceuil' , component:HomeComponent},
  {path:'signup' , component:SignupComponent},
  {path:'acceuil/:id' , component:HomeComponent},
  {path:'welcome' , component:WelcomeComponent},
  {path:'acceuil' , component:HomeComponent},
  {path:'fixe' , component:FixeComponent},
  {path:'login' , component:LoginComponent},
  {path:'addAdmin' , component:AddAdminComponent},
  {path:'addFormee' , component:AddFormeeComponent},
  {path:'addFormateur' , component:AddFormateurComponent},
  {path:'addFormation' , component:AddFormationComponent},
  {path:'addStagiere' , component:AddStagiereComponent},
  {path:'addSalle' , component:AddSalleComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'displayFormee/:id' , component:DisplayFormeeComponent},
  {path:'displayFormateur/:id' , component:DisplayFormateurComponent},
  {path:'displayFormation/:id' , component:DisplayFormationComponent},
  {path:'displayStagiere/:id' , component:DisplaystagiereComponent},
  {path:'displaySalle/:id' , component:DisplaySalleComponent},
  {path:'editFormee/:id' , component:AddFormeeComponent},
  {path:'editFormateur/:id' , component:AddFormateurComponent},
  {path:'editFormation/:id' , component:AddFormationComponent},
  {path:'editStagiere/:id' , component:AddStagiereComponent},
  {path:'editSalle/:id' , component:AddSalleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
