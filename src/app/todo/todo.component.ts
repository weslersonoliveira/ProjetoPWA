import { Component, OnInit } from '@angular/core';

export class Todo {
  desc: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo: Todo = new Todo();
  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

  save(todo: Todo) {
    this.todos.push(todo);
    this.todo = new Todo();
  }

  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
