import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Versioni } from '../versioni/versioni';
import { VersioniService } from '../versioni.service';
import { Flussi } from '../flussi';
import { FlussiService } from '../flussi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-versione-detail',
  templateUrl: './versione-detail.component.html',
  styleUrls: ['./versione-detail.component.css']
})

export class VersioneDetailComponent implements OnInit {

    @Input() versione: Versioni;
    flussi: Flussi[];
    flussoSelect: Flussi;
    private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private versioniService: VersioniService,
    private location: Location,
    private flussiService: FlussiService
    ) { }

  ngOnInit() {
    this.getFlussi();
  }

  onSelect(flusso) {
    console.log(flusso);
    this.flussoSelect = flusso;
  }

  getFlussi() {
    this.flussiService.getFlussi();
    this.subscription = this.flussiService.flussiO.subscribe(data => this.flussi = data);
  }


  delVersione(id: number) {
    console.log(id);
    this.versioniService.delVersione(id);
  }

  postVersione(versione: Versioni) {
    //document.getElementById
    console.log(versione);

    //this.versioniService.postVersione(versione);
  }

  putVersione(id: number, versione: Versioni) {
    console.log(versione);
    this.versioniService.putVersione(id, versione);
  }

  compareVers(a: any, b: any) {
    return a.id === b.id;
  }
}
