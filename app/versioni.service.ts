import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Versioni } from './versioni/versioni';
import { Data } from '@angular/router';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})

export class VersioniService {

  public d: String;
  public m: String;
  public a: String;

  apiURL = 'http://localhost:8080/gestioneflussi/resources/versioni';

  versioniO: BehaviorSubject<Versioni[]> = new BehaviorSubject<Versioni[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getVersioni(): void {
    this.httpClient.get<Versioni[]>(this.apiURL)
      .subscribe(data => {
        this.versioniO.next(data);
      });
  }
  /*format00(a): string {
    if (a.length < 2) {
      a = '0' + a;
    }
    return a;
  }

  formatData(data): Date {
    this.d = this.format00(data.slice(0, data.indexOf('/')));
    this.m = this.format00(data.slice(data.indexOf('/') + 1, data.lastIndexOf('/')));
    this.a = this.format00(data.slice(data.lastIndexOf('/') + 1));

    //return  this.d.concat('/', this.m, '/', this.a);
    return new Date(`${this.d}/${this.m}/${this.a}`);
  }*/
  public delVersione(id: number): void {
    this.httpClient.delete(`${this.apiURL}/${id}`)
      .subscribe(response => this.getVersioni());
  }

  public postVersione(versione: Versioni): void {
    this.httpClient.post(this.apiURL, versione)
      .subscribe(response => this.getVersioni());
  }

  public putVersione(id: number, versione: Versioni): void {
    //versione.data = this.formatData(versione.data)
    this.httpClient.put(`${this.apiURL}/${id}`, versione)
      .subscribe(response => this.getVersioni());
  }
}
