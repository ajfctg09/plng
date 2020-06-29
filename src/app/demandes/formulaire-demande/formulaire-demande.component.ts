import { DemandeService } from './../../demande.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from './../../demande';


@Component({
  selector: 'formulaire-demande',
  templateUrl: './formulaire-demande.component.html',
  styleUrls: ['./formulaire-demande.component.css']
})
export class FormulaireDemandeComponent implements OnInit {

  demande: Demande = new Demande();
  submitted = false;

  constructor(private demandeService : DemandeService, private router:Router) { }

  ngOnInit() {
  }

  newDemande():void {
    this.submitted = false;
    this.demande = new Demande();
  }

  save() {
    this.demandeService.createDemande(this.demande)
    .subscribe(data => console.log(data), error => console.log(error));
    this.demande = new Demande();
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/demandes']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
