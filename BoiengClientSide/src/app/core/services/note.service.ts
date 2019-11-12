import { Injectable } from '@angular/core';
import { Note} from '../../shared/models/note.model';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public notes: Note[]

  private _refreshNote$ = new Subject<any>();
  get refreshNote$(){
    return this._refreshNote$
  }
  constructor(private http: HttpClient) { 
    this.fetchNotes();
  }

  fetchNotes()
  {
    return this.http 
      .get<Note[]>(
        'http://localhost:63255/api/notes',
        {
          responseType: 'json'
        }
      )
      
  }

  createNote(noteData: Note){
    return this.http
    .post<Note>('http://localhost:63255/api/notes', noteData)
    .pipe(
      tap(()=>{ this._refreshNote$.next();})
    );
  }
}
