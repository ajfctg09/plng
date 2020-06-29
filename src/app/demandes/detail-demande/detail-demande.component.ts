import { Component, OnInit } from '@angular/core';
import { Demande } from './../../demande';
import { DemandeService } from 'src/app/demande.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {

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

  list() {
    this.router.navigate(['demandes']);
  }

}
