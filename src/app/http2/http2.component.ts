import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface Todo {
  completed:boolean,
  title:string,
  id?:number
}
@Component({
  selector: 'app-http2',
  templateUrl: './http2.component.html',
  styleUrls: ['./http2.component.css']
})
export class Http2Component implements OnInit {
  todos:Todo[] = []
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .subscribe(response =>{
        console.log('response 2 > ', response);
        this.todos = response;
      })
  }

  onToggleTodo(){
      
  }

}
