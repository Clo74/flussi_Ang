import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlussiComponent } from './flussi/flussi.component';
import { VersioniComponent } from './versioni/versioni.component';

const routes: Routes = [
  { path: 'flussi', component: FlussiComponent },
  { path: 'versioni', component: VersioniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
