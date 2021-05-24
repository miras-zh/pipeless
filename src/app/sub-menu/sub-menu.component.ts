import { Component, OnInit } from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {
  counter:number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  check(){
    if(this.counter<3)
    this.counter+=1;
    return true;
  }
}
{

}