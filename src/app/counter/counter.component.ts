import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../services/app-counter.services';
import { LocalCounterService } from '../services/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers:[LocalCounterService]
})
export class CounterComponent {

  constructor(public appCounterService:AppCounterService, public localCounterService:LocalCounterService) { }

  ngOnInit(): void {
  }

}
