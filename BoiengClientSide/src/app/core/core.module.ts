import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from './services/note.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[NoteService]
})
export class CoreModule { }
