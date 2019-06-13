import { Component, OnInit, OnDestroy } from '@angular/core';
import { Versioni } from './versioni';
import { VersioniService } from '../versioni.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-versioni',
  templateUrl: './versioni.component.html',
  styleUrls: ['./versioni.component.css']
})
export class VersioniComponent implements OnInit, OnDestroy {


  versioni: Versioni[];
  versioneSelected: Versioni;
  myJson: Versioni;
  private subscription: Subscription;
  
  constructor(private versioniService: VersioniService) {}

  ngOnInit() {
    this.getDati();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * mi torna un json con la campo flussi un json composto da id e tabella
   * lo sostituisco con un campo flusso = flusso.tabella
   */
  /*ricreaJson(json) {
    this.versioni = [];
    console.log(json);
    json.forEach(element => {
      this.myJson = {
        id: element.id,
        idFlusso: element.flusso.id,
        flusso: element.flusso.tabella,
        data: element.data,
        versione: element.versione
      }
      this.versioni.push(this.myJson);
    });
    return this.versioni;
  }*/

  getDati() {
    this.versioniService.getVersioni();

    this.subscription = this.versioniService.versioniO
      .subscribe(data => {
        this.versioni = data;
      });

    /*this.versioniService.getVersioni()
      .subscribe((result) => {
        this.versioni = this.ricreaJson(result);
        console.log(this.versioni);
      });*/
  }

  onSelect(versione: Versioni): void {
    this.versioneSelected = versione;
  }
}
