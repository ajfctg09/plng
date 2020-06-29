import { Demande } from './../../demande';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { DemandeService } from 'src/app/demande.service';

@Component({
  selector: 'demande-plongee',
  templateUrl: './demande-plongee.component.html',
  styleUrls: ['./demande-plongee.component.css']
})
export class DemandePlongeeComponent implements OnInit {

  demandes: Observable<Demande[]>;
  p: number;
  constructor(private demandeService: DemandeService, private router: Router) { }

  ngOnInit() {
    this.reloadData(); 
  }
  reloadData() {
    this.demandes = this.demandeService.getDemandesList();
  }

  deleteDemande(num: number) {
    this.demandeService.deleteDemande(num)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  demandeDetails(num: number) {
    this.router.navigate(['details_demande', num]);
  }

  updateDemande(num: number) {
    this.router.navigate(['update_demande', num]);
  }
}
