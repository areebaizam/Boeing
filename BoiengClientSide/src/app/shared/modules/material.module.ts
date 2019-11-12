import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,  
];

import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  exports: [MATERIAL_MODULES, FlexLayoutModule]
})
export class MaterialModule { }