import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '../shared/shared.module';
import { FormsModule} from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './containers/landing/landing.component';
import { EditComponent } from './containers/edit/edit.component';


@NgModule({
  declarations: [HomeComponent, LandingComponent, EditComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeModule { }
