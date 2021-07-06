import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map,startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-translate-component',
  templateUrl: './translate-component.component.html',
  styleUrls: ['./translate-component.component.css']
})
export class TranslateComponentComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  displayedColumns: string[] = ['position', 'name',  'symbol','weight'];
  displayedColumnsData: string[] = ['position', 'name',  'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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

  dataS: any;

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

  logData(row:any){
    console.log('row>',row)
  }

  applyFilter(value:any){
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
