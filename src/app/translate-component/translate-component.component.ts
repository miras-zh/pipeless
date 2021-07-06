import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-translate-component',
  templateUrl: './translate-component.component.html',
  styleUrls: ['./translate-component.component.css']
})
export class TranslateComponentComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  notification: number = 9;
  showSpinner: Boolean = false;
  val: number = 0;
  opened = false;
  selectedValue!: string;
  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    { name: "Angular" },
    { name: "Angular Material" },
    { name: "React" },
    { name: "Vue" },
  ]

  minDate = new Date();
  maxDate = new Date(2021,6,20);
  dateFilter = (date:any)=>{
    const dat = date.getDay()
    
    return dat !== 0 && dat !== 6 && dat !== 5;
  }
//snackbar



  constructor(
    public translocoService: TranslocoService,
    private snackBar: MatSnackBar,
    public dialog:MatDialog
    ) 
    { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogExampleComponent,
      {data:{name:'Miko'}});

    dialogRef.afterClosed()
      .subscribe(result=>{console.log('dialog result',result)})
  }

  openSnackBar (message:string,action:any){
   let snackBarRef = this.snackBar.open(message,action,{duration:2000})
   snackBarRef.afterDismissed().subscribe(()=>{
     console.log('The Snackbar was dismissed')
   })

   snackBarRef.onAction().subscribe(()=>{
     console.log('The snackbar action was triggered')
   })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayFn(subject: any) {
    return subject ? subject.name : undefined;
  }

  myControl = new FormControl()
  filteredOptions!: Observable<string[]>

  log(state: string) { console.log(state) }

  loadDataforSpinner() {
    setTimeout(() => { this.showSpinner = true }, 15000)
    // this.showSpinner = true;
    setTimeout(() => { this.showSpinner = false }, 3000)
  }

  setActiveLang(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
  count() {
    if (this.val == 100) { this.val = 0 }
    this.val += 10;

  }
}
