import { ActivitesComponent } from './activites/activites.component';
import { AboutComponent } from './about/about.component';
import { DemandePlongeeComponent } from './demandes/demande-plongee/demande-plongee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatePlongeurComponent } from './create-plongeur/create-plongeur.component';
import { PlongeurDetailsComponent } from './plongeur-details/plongeur-details.component';
import { PlongeurListComponent } from './plongeur-list/plongeur-list.component';
import { UpdatePlongeurComponent } from './update-plongeur/update-plongeur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormulaireDemandeComponent } from './demandes/formulaire-demande/formulaire-demande.component'
import { UpdateDemandeComponent } from './demandes/update-demande/update-demande.component'
import { DetailDemandeComponent } from './demandes/detail-demande/detail-demande.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'plongeur', pathMatch: 'full' },
  { path: 'plongeurs', component: PlongeurListComponent },
  { path: 'add', component: CreatePlongeurComponent },
  { path: 'home', component: HomeComponent },

  { path: 'update/:num', component: UpdatePlongeurComponent },
  { path: 'details/:num', component: PlongeurDetailsComponent },
  { path: 'demandes', component: DemandePlongeeComponent },
  { path: 'formulaire_demande', component: FormulaireDemandeComponent },
  { path: 'update_demande/:num' , component: UpdateDemandeComponent},
  { path: 'details_demande/:num', component:DetailDemandeComponent},
  { path: 'about', component: HomeComponent },
  { path: 'activites', component: ActivitesComponent },
  { path: 'connexion', component: ConnexionComponent },

  { path: '**', component:ActivitesComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
