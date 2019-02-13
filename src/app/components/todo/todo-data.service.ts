import { BehaviorSubject, Observable } from 'rxjs';
import { TodoItem, TodoList } from './models';

export class TodoDataService {

  private count = 99;
  private data: TodoList = {
    items: [
      { id: '1', description: 'Shovel Snow', completed: false },
      { id: '2', description: 'Change Oil', completed: true },
    ]
  };

  private subject: BehaviorSubject<TodoList>;
  constructor() {
    this.subject = new BehaviorSubject<TodoList>(this.data);
  }

  getList(): TodoList {
    return { ...this.data };
  }

  getListAsObservable(): Observable<TodoList> {
    return this.subject.asObservable();
  }

  addTodoItem(description: string) {
    const itemToAdd: TodoItem = {
      description,
      completed: false,
      id: (this.count++).toString()
    };

    this.data.items = [itemToAdd, ...this.data.items];
    // pub list has changed
    this.subject.next(this.data);
  }

}
