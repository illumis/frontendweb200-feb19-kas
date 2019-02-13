import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
// Verify /actions/ is in the correct place... pretty sure jeff had this somewhere else...
import * as actions from '../todos-redux/actions/todos.actions';


@Injectable()
export class TodosEffects {
  @Effect({ dispatch: false }) logThemAll$ = this.actions$
    .pipe(
      ofType(actions.ADD_TODO),
      map(a => a as actions.TodoAdded),
      switchMap(action => this.http.post('http:/localhost:3000/todos', action.payload)) // payload
    );

  constructor(private actions$: Actions, private http: HttpClient) { }
}
