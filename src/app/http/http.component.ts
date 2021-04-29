import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToDo } from '../services/todo.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  todoTitle: string = '';
  todos: ToDo[] = [];
  loading = false;
  todosEmpty: ToDo[] = [];
  idCounter:number = 5;

  constructor(public todoService: TodoService) { }

  ngOnInit() {   //работаю с массивом TODO
    this.fetchTodos()
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return
    }

    this.todoService.addTodo({
      title: this.todoTitle,
      completed: false,
      id: this.idCounter++
    })
      .subscribe(todo => { this.todos.push(todo); this.todoTitle = '' })
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.fetchTodos()
      .subscribe(response => {
        console.log('response ', response)
        this.todos = response;
        this.loading = false;
      })
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
      .subscribe((response) => {
        console.log('response delete >', response);

        for (let i: number = 0; i < this.todos.length; i++) {
          if (this.todos[i].id !== id) {
            this.todosEmpty.push(this.todos[i]);
          }
        }

        this.todos = this.todosEmpty;
        this.todosEmpty = [];
      })
  }

  completeTodo(id: number) {
    this.todoService.completeTodo(id)
      .subscribe(response => {
        for (let i: number = 0; i < this.todos.length; i++) {
          if (this.todos[i].id == id) {
            this.todos[i].completed = !this.todos[i].completed
          }
        }
      })
  }
}














