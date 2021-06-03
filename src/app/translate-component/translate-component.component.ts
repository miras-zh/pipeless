import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-translate-component',
  templateUrl: './translate-component.component.html',
  styleUrls: ['./translate-component.component.css']
})
export class TranslateComponentComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  notification:number = 9;
  showSpinner:Boolean = false;
  val:number = 0;
  opened = false;

  constructor(public translocoService:TranslocoService) { }

  ngOnInit(): void {
    
  }

  log(state:string){console.log(state); alert(state)}

  loadDataforSpinner(){
    setTimeout(()=>{this.showSpinner = true},2000)
    // this.showSpinner = true;
    setTimeout(()=>{this.showSpinner = false},5000)
  }

  setActiveLang(lang:string){
    this.translocoService.setActiveLang(lang);
  }
  count(){
    if(this.val == 100){this.val = 0}
    this.val +=10;

  }
}
