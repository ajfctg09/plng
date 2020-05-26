import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plongeur } from './plongeur';

@Injectable({
  providedIn: 'root'
})
export class PlongeurService {

  private baseUrl = 'http://localhost:8080/api/v3/plongeursfirebase ';

  constructor(private http: HttpClient) { }

  getPlongeur(num: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${num}`);
  }

  // tslint:disable-next-line:ban-types
  createPlongeur(plongeur: Object): Observable<object> {
    return this.http.post<Plongeur>(this.baseUrl, plongeur);
  }

  updatePlongeur(num: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${num}`, value);
  }
  deletePlongeur(num: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${num}`);
  }
  getPlongeursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
