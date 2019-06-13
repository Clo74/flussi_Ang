import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Flussi } from '../flussi';
import { ActivatedRoute } from '@angular/router';
import { FlussiService } from '../flussi.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flusso-detail',
  templateUrl: './flusso-detail.component.html',
  styleUrls: ['./flusso-detail.component.css']
})

export class FlussoDetailComponent implements OnInit, OnDestroy {

  @Input() flusso: Flussi;
  insTab: String;
  appFlusso: Flussi;
  private subscription: Subscription;

  constructor(
  private route: ActivatedRoute,
  private flussiService: FlussiService,
  private location: Location,
  ) {
   }

  ngOnInit() {
    this.subscription = this.flussiService.flussoO.subscribe(data => this.flusso = data);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  appareDiv() {
    document.getElementById('divIns').style.display = 'block';
  }

  delFlusso(id: number) {
    console.log(id);
    this.flussiService.delFlusso(id);
  }

  postFlusso() {
    this.appFlusso = new Flussi(null, this.insTab);
    this.flussiService.postFlusso(this.appFlusso);
    document.getElementById('divIns').style.display = 'none';

  }

  putFlusso(id: number, flusso: Flussi) {
    console.log(flusso);
    this.flussiService.putFlusso(id, flusso);
  }

}
