import { Demande } from './demande';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseUrl = 'http://localhost:8080/api/v3/demandes';

  constructor(private http: HttpClient) { }

  getDemande(num: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${num}`);
  }

  createDemande(demande: Object): Observable<object> {
    return this.http.post<Demande>(this.baseUrl, demande);
  }

  updateDemande(num: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${num}`, value);
  }
  deleteDemande(num: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${num}`);
  }
  getDemandesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
