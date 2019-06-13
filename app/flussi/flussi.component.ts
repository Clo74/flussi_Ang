import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlussiService } from '../flussi.service';
import { Flussi } from '../flussi';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flussi',
  templateUrl: './flussi.component.html',
  styleUrls: ['./flussi.component.css']
})
export class FlussiComponent implements OnInit, OnDestroy {

  flussi: Flussi[];
  flussoSelected: Flussi;
  private subscription: Subscription;

  constructor(private flussiService: FlussiService) { }

  ngOnInit() {
    this.getDati();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getDati() {
    this.flussiService.getFlussi();
    this.subscription = this.flussiService.flussiO.subscribe(data => this.flussi = data);
  }

  onSelect(flusso: Flussi): void {
    this.flussoSelected = flusso;
  }
}
