import { Action } from '@ngrx/store';
import { TodoEntity } from '../reducers/todos.reducers';

let id = 99;
export const ADD_TODO = '[todosFeature] add todo';
export class TodoAdded implements Action {
  readonly type = ADD_TODO;
  payload: TodoEntity;
  constructor(description: string) {
    this.payload = {
      description,
      id: 'T' + (id++)
    };
  }
}

// Discriminated Union Type
export type All = TodoAdded;
