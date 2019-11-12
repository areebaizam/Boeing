import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note} from '../../../shared/models/note.model';
import { NoteService } from '../../../core/services/note.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bng-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  // form: NgForm;
  notes: Note[];
  subscription: Subscription;
  constructor(private noteService: NoteService) { }

  @ViewChild('noteForm',{static: true}) form: NgForm; 
  ngOnInit() {
    this.subscription = this.noteService.refreshNote$
    .subscribe( () => {this.FetchNotes()} );
    this.FetchNotes();
  }

  onCreateNote(noteData: Note)
  {
    this.noteService.createNote(noteData)
    .subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('completed!')
  );
    this.onReset()
    //console.log(noteData);
    //this.FetchNotes();
  }

  onFetchNotes(){
    this.FetchNotes();
  }

  FetchNotes() {
    this.noteService.fetchNotes().subscribe(
      notes => {
        this.notes = notes;
      }
    );
  }

  onReset() {
    this.form.resetForm();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
