import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';                     //1
import {MatIconModule} from '@angular/material/icon';                         //2
import {MatTabsModule} from '@angular/material/tabs';                             //3
import {MatButtonToggleModule} from '@angular/material/button-toggle';            //4
import {MatBadgeModule} from '@angular/material/badge';                           //5
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';      //6
import {MatToolbarModule} from '@angular/material/toolbar'; //7
import {MatSidenavModule} from '@angular/material/sidenav';//8
import {MatMenuModule} from '@angular/material/menu';      //9
import {MatListModule} from '@angular/material/list'; //10
import {MatDividerModule} from '@angular/material/divider'; //11
import {MatGridListModule} from "@angular/material/grid-list"; //12
import {MatExpansionModule} from '@angular/material/expansion';//13
import {MatCardModule} from '@angular/material/card';//14
import {MatStepperModule} from '@angular/material/stepper';//15
import {MatInputModule} from '@angular/material/input'; // 16
import {MatSelectModule} from '@angular/material/select';//17
import {MatAutocompleteModule} from '@angular/material/autocomplete';//17
import {MatCheckboxModule} from '@angular/material/checkbox';   //18
import {MatRadioModule}from '@angular/material/radio';  //19
import {MatDatepickerModule} from '@angular/material/datepicker'; //20
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';//21-20
import {MatTooltipModule}from '@angular/material/tooltip';//22
import {MatSnackBarModule}from '@angular/material/snack-bar';//23
import { MatDialogModule } from '@angular/material/dialog'; // 24


const MaterialComponents = [
  MatButtonModule,MatIconModule,MatTabsModule,
  MatButtonToggleModule,MatBadgeModule,MatProgressSpinnerModule,
  MatToolbarModule,MatSidenavModule,MatMenuModule,
  MatListModule,MatDividerModule,MatGridListModule,
  MatExpansionModule,MatCardModule,MatStepperModule,
  MatInputModule,MatSelectModule,MatAutocompleteModule,
  MatCheckboxModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule, MatRippleModule,
  MatTooltipModule,MatSnackBarModule,MatDialogModule
]

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    MaterialComponents 
  ],
  exports:[
    MaterialComponents 
  ]
})
export class Material2Module { }
