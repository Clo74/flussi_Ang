import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Flussi } from '../flussi';
import { ActivatedRoute } from '@angular/router';
import { FlussiService } from '../flussi.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-flusso-detail',
  templateUrl: './flusso-detail.component.html',
  styleUrls: ['./flusso-detail.component.css']
})

export class FlussoDetailComponent implements OnInit {

  @Input() flusso: Flussi;

  constructor(
  private route: ActivatedRoute,
  private flussiService: FlussiService,
  private location: Location,
  ) { }

  ngOnInit() {
  }

  delFlusso(id: number) {
    console.log(id);
    this.flussiService.delFlusso(id);
    //.subscribe(response => {
      //this.flussoComp.flussi = this.flussoComp.flussi.filter(elem => elem.id !== id)});
  }

  postFlusso(flusso: Flussi) {
    console.log(flusso);

    this.flussiService.postFlusso(flusso);
  }

  putFlusso(id: number, flusso: Flussi) {
    console.log(flusso);
    this.flussiService.putFlusso(id, flusso);
  }

}
