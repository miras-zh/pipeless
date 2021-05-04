import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-translate-component',
  templateUrl: './translate-component.component.html',
  styleUrls: ['./translate-component.component.css']
})
export class TranslateComponentComponent implements OnInit {

  constructor(public translocoService:TranslocoService) { }

  ngOnInit(): void {
    
  }


  setActiveLang(lang:string){
    this.translocoService.setActiveLang(lang);
  }
}
