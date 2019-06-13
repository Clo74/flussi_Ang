import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flussi } from './flussi';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FlussiService {
  apiURL = 'http://localhost:8080/gestioneflussi/resources/flussi';

  myJson: any;

  flusso: Flussi;
  flussiO: BehaviorSubject<Flussi[]> = new BehaviorSubject<Flussi[]>([]);
  flussoO: BehaviorSubject<Flussi> = new BehaviorSubject<Flussi>(this.flusso);

  constructor(private httpClient: HttpClient) { }

 /* public getFlussi(): Observable<Flussi[]> {
    return this.httpClient.get<Flussi[]>(this.apiURL);
  }
  */

  public getFlussi(): void {

    this.httpClient.get<Flussi[]>(this.apiURL).
      subscribe(data => {
        this.flussiO.next(data);
    });
  }

/* public delFlusso (id: number): Observable<{}> {

    return this.httpClient.delete(`${this.apiURL}/${id}`);
  }*/

  public delFlusso(id: number): void {
    this.httpClient.delete(`${this.apiURL}/${id}`)
    .subscribe(response => this.getFlussi());
  }

  public postFlusso(flusso: Flussi): void {
    this.httpClient.post(this.apiURL, flusso)
    .subscribe(response => {
      this.myJson = response;
      console.log(response);
      this.flusso = new Flussi(this.myJson.id, this.myJson.tabella);
      this.flussoO.next(this.flusso);
      this.getFlussi();
    });
  }

  public putFlusso(id: number,flusso: Flussi): void {
    console.log(flusso);
    this.httpClient.put(`${this.apiURL}/${id}`, flusso)
    .subscribe(response => this.getFlussi());
  }
}