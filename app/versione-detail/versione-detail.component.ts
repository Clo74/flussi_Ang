import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Versioni } from '../versioni/versioni';
import { VersioniService } from '../versioni.service';

@Component({
  selector: 'app-versione-detail',
  templateUrl: './versione-detail.component.html',
  styleUrls: ['./versione-detail.component.css']
})

export class VersioneDetailComponent implements OnInit {

    @Input() versione: Versioni;

  constructor(
    private route: ActivatedRoute,
    private versioniService: VersioniService,
    private location: Location,
    ) { }

  ngOnInit() {
  }

  delVersione(id: number) {
    console.log(id);
    this.versioniService.delVersione(id);
    //.subscribe(response => {
      //this.flussoComp.flussi = this.flussoComp.flussi.filter(elem => elem.id !== id)});
  }

  postVersione(versione: Versioni) {
    console.log(versione);

    this.versioniService.postVersione(versione);
  }

  putVersione(id: number, versione: Versioni) {
    console.log(versione);
    this.versioniService.putVersione(id, versione);
  }
}
