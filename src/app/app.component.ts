import { Component, OnInit } from '@angular/core';
import { AppCounterService } from './services/app-counter.services';
import { LocalCounterService } from './services/local-counter.service';


export interface Post {
  title:string,
  text:string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LocalCounterService]
})
export class AppComponent {
  

  title = 'pipeless';
  search: string = '';
  searchField:string = 'title'

  e:number = Math.E; //exponenta
  str:string = 'Hello world';
  date: Date = new Date
  float: number = 0.42
  obj = {
    id:1,
    title: 'pipe',
    text: 'hw'
  }

  posts: Post[] = [
    {title:'Services Angular',text:'about services angular'},
    {title:'Pipe',text:'about pipe angular'},
    {title:'Pipe Info',text:'about decorator angular'},
    {title:'decorator',text:'about decorator angular'},
    {title:'deco',text:'about decorator angular'},
    {title:'Component',text:'about decorator angular'},
    {title:'compo',text:'about decorator angular'},
    {title:'Components',text:'about decorator angular'},
    {title:'Service',text:'about decorator angular'},
    {title:'Servi',text:'about decorator angular'},
    {title:'Ser',text:'about decorator angular'},
    {title:'Angular',text:'about decorator angular'},
    {title:'Ang',text:'about decorator angular'},
    {title:'Angulars',text:'about decorator angular'},
    {title:'Module',text:'about decorator angular'},
    {title:'Mod',text:'about decorator angular'},
    {title:'Modules',text:'about decorator angular'},
    {title:'Route',text:'about decorator angular'},
    {title:'Routing',text:'about decorator angular'},
  ]

  constructor(public appCounterService: AppCounterService,public localCounterService:LocalCounterService){

  }

  

      
  
  
}
