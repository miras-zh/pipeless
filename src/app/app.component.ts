import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { logging } from 'selenium-webdriver';
import { AuthService } from './auth.service';
import { DataLogin, ModalComponent } from './modal/modal.component';
import { AppCounterService } from './services/app-counter.services';
import { LocalCounterService } from './services/local-counter.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RefDirective } from './ref.directive';

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
@ViewChild(RefDirective,{static:false}) refDir!:RefDirective;

  modal:boolean = false;
  nameUser: string = '';
  dataLogin!:DataLogin;

  title:string = 'pipeless';
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

  constructor(public appCounterService: AppCounterService,public localCounterService:LocalCounterService,
    public auth:AuthService, public resolver:ComponentFactoryResolver){


  }

  showModal(){
    const  modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();
    this.refDir.containerRef.createComponent(modalFactory)
  }

  addName(dataModal:DataLogin){
    console.log('данные получены с modal')
    this.nameUser = dataModal.name;
    this.modal = false;
  }  

  closeModal(closeStatus:boolean){
    if(closeStatus){this.modal = false;
      
    }
  }
  
  
}
