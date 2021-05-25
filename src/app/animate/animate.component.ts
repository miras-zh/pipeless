import { Component, OnInit } from '@angular/core';
import {trigger, transition,useAnimation} from '@angular/animations';
import {bounce, bounceOutUp} from 'ng-animate';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations:[
    trigger('bounce',[
      transition('void=>*',useAnimation(bounce)),
      transition('*=>void',useAnimation(bounceOutUp)),
    ]
    )
  ]
})
export class AnimateComponent implements OnInit {
  toogle:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
