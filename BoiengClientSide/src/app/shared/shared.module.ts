import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoteComponent } from './components/note/note.component';
import { MaterialModule } from './modules/material.module';
import { MenuService } from './services/menu.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NoteComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [HeaderComponent, FooterComponent, NoteComponent,MaterialModule,NoteComponent],
  providers: [MenuService]
})
export class SharedModule { }
