import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlussiComponent } from './flussi/flussi.component';
import { VersioniComponent } from './versioni/versioni.component';
import { FlussoDetailComponent } from './flusso-detail/flusso-detail.component';
import { FormsModule } from '@angular/forms';
import { VersioneDetailComponent } from './versione-detail/versione-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FlussiComponent,
    VersioniComponent,
    FlussoDetailComponent,
    VersioneDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
