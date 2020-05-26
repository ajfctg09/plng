import { Component, OnInit } from '@angular/core';
import { PlongeurService } from '../plongeur.service';
import { Plongeur } from '../plongeur';
import { ActivatedRoute, Router } from '@angular/router';
import { PlongeurListComponent } from '../plongeur-list/plongeur-list.component';

@Component({
  selector: 'app-update-plongeur',
  templateUrl: './update-plongeur.component.html',
  styleUrls: ['./update-plongeur.component.css']
})
export class UpdatePlongeurComponent implements OnInit {

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

  updatePlongeur() {
    this.plongeurService.updatePlongeur(this.num, this.plongeur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.plongeur = new Plongeur();
    this.gotoList();
  }

  onSubmit() {
    this.updatePlongeur();
  }
  gotoList() {
    this.router.navigate(['/plongeurs']);
  }

}
