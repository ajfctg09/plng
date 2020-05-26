import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { PlongeurService } from  '../plongeur.service';
// tslint:disable-next-line:import-spacing
import { Plongeur } from  '../plongeur';
import { ActivatedRoute, Router } from '@angular/router';
import { PlongeurListComponent } from '../plongeur-list/plongeur-list.component';

@Component({
  selector: 'app-plongeur-details',
  templateUrl: './plongeur-details.component.html',
  styleUrls: ['./plongeur-details.component.css']
})
export class PlongeurDetailsComponent implements OnInit {

  num: number;
  plongeur: Plongeur;

  constructor(private route: ActivatedRoute, private router: Router,
              private plongeurService: PlongeurService) { }

  ngOnInit() {
    this.plongeur = new Plongeur();
    this.num = this.route.snapshot.params.num;
    this.plongeurService.getPlongeur(this.num)
      .subscribe(data => {
        console.log(data);
        this.plongeur = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['plongeurs']);
  }

}
