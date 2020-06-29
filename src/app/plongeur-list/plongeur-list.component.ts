import { Component, OnInit, ViewChild } from '@angular/core';
import { PlongeurDetailsComponent } from '../plongeur-details/plongeur-details.component';
import { Observable } from 'rxjs';
import { PlongeurService } from '../plongeur.service';
import { Plongeur } from '../plongeur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plongeur-list',
  templateUrl: './plongeur-list.component.html',
  styleUrls: ['./plongeur-list.component.css']
})
export class PlongeurListComponent implements OnInit {

  plongeurs: Observable<Plongeur[]>;
  p: number;
  constructor(private plongeurService: PlongeurService, private router: Router) { }

  ngOnInit() {
    this.reloadData(); 
  }
  reloadData() {
    this.plongeurs = this.plongeurService.getPlongeursList();
    
  }

  deletePlongeur(num: number) {
    this.plongeurService.deletePlongeur(num)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  plongeurDetails(num: number) {
    this.router.navigate(['details', num]);
  }

  updatePlongeur(num: number) {
    this.router.navigate(['update', num]);
  }



}
