import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePlongeurComponent } from './create-plongeur/create-plongeur.component';
import { PlongeurDetailsComponent } from './plongeur-details/plongeur-details.component';
import { PlongeurListComponent } from './plongeur-list/plongeur-list.component';
import { UpdatePlongeurComponent } from './update-plongeur/update-plongeur.component';
import { PlongeurService } from './plongeur.service';
import { HttpClientModule } from '@angular/common/http';
import { DemandePlongeeComponent } from './demande-plongee/demande-plongee.component';
import { AboutComponent } from './about/about.component';
import { ActivitesComponent } from './activites/activites.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatePlongeurComponent,
    PlongeurDetailsComponent,
    PlongeurListComponent,
    UpdatePlongeurComponent,
    DemandePlongeeComponent,
    AboutComponent,
    ActivitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
