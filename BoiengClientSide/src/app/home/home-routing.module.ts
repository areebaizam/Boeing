import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LandingComponent } from './containers/landing/landing.component';
import { EditComponent } from './containers/edit/edit.component';

const routes: Routes = [{ path: '', component: HomeComponent
, children: [ { path: '', component: LandingComponent }
, { path: 'edit', component: EditComponent }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
