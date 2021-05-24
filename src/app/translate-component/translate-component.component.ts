import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-translate-component',
  templateUrl: './translate-component.component.html',
  styleUrls: ['./translate-component.component.css']
})
export class TranslateComponentComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(public translocoService:TranslocoService) { }

  ngOnInit(): void {
    
  }


  setActiveLang(lang:string){
    this.translocoService.setActiveLang(lang);
  }
}
