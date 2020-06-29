import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { PlongeurService } from  '../plongeur.service';
// tslint:disable-next-line:import-spacing
import { Plongeur } from  '../plongeur';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-plongeur',
  templateUrl: './create-plongeur.component.html',
  styleUrls: ['./create-plongeur.component.css']
})
export class CreatePlongeurComponent implements OnInit {

  plongeur: Plongeur = new Plongeur();
  submitted = false;

  constructor(private plongeurService: PlongeurService, private router: Router) { }

  ngOnInit() {
  }

  newPlongeur(): void {
    this.submitted = false;
    this.plongeur = new Plongeur();

  }

  save() {
    this.plongeurService.createPlongeur(this.plongeur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.plongeur = new Plongeur();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/plongeurs']);
  }

}
