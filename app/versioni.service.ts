import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Versioni } from './versioni/versioni';

@Injectable({
  providedIn: 'root'
})

export class VersioniService {
  public firstPage = '';
  public prevPage = '';
  public nextPage = '';
  public lastPage = '';
  apiURL = 'http://localhost:8080/gestioneflussi/resources/versioni';

  versioniO: BehaviorSubject<Versioni[]> = new BehaviorSubject<Versioni[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getVersioni(): void {
    this.httpClient.get<Versioni[]>(this.apiURL)
      .subscribe(data => {
        this.versioniO.next(data);
      });
  }

  public delVersione(id: number): void {
    this.httpClient.delete(`${this.apiURL}/${id}`)
    .subscribe(response => this.getVersioni());
  }

  public postVersione(versione: Versioni): void {
    this.httpClient.post(this.apiURL, versione)
    .subscribe(response => this.getVersioni());
  }

  public putVersione(id: number, versione: Versioni): void {
    this.httpClient.put(`${this.apiURL}/${id}`, versione)
    .subscribe(response => this.getVersioni());
  } 
}
