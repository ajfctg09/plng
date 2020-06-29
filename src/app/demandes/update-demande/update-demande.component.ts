import { Component, OnInit } from '@angular/core';
import { Demande } from './../../demande';
import { DemandeService } from 'src/app/demande.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'update-demande',
  templateUrl: './update-demande.component.html',
  styleUrls: ['./update-demande.component.css']
})
export class UpdateDemandeComponent implements OnInit {
num:number;
demande: Demande;
  constructor(private route: ActivatedRoute,private router: Router,
    private demandeService: DemandeService ) { }

  ngOnInit() {
    this.demande = new Demande();
    this.num = this.route.snapshot.params['num'];
    this.demandeService.getDemande(this.num)
      .subscribe(data =>{
        console.log(data);
        this.demande = data
      }, error => console.log(error));
  }

  updateDemande() {
    this.demandeService.updateDemande(this.num, this.demande)
      .subscribe(data => console.log(data), error => console.log(error));
      this.demande = new Demande();
      this.gotolist();
  }

  onSubmit(){
    this.updateDemande();
  }

  gotolist() {
    this.router.navigate(['/demandes']);
  }

}
