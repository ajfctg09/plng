import { ActivitesComponent } from './activites/activites.component';
import { AboutComponent } from './about/about.component';
import { DemandePlongeeComponent } from './demande-plongee/demande-plongee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePlongeurComponent } from './create-plongeur/create-plongeur.component';
import { PlongeurDetailsComponent } from './plongeur-details/plongeur-details.component';
import { PlongeurListComponent } from './plongeur-list/plongeur-list.component';
import { UpdatePlongeurComponent } from './update-plongeur/update-plongeur.component';

const routes: Routes = [
  { path: '', redirectTo: 'plongeur', pathMatch: 'full' },
  { path: 'plongeurs', component: PlongeurListComponent },
  { path: 'add', component: CreatePlongeurComponent },
  { path: 'update/:num', component: UpdatePlongeurComponent },
  { path: 'details/:num', component: PlongeurDetailsComponent },
  { path: 'demande', component: DemandePlongeeComponent },
  { path: 'about/:num', component: AboutComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
