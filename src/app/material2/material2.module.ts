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


const MaterialComponents = [
  MatButtonModule,MatIconModule,MatTabsModule,
  MatButtonToggleModule,MatBadgeModule,MatProgressSpinnerModule,
  MatToolbarModule,MatSidenavModule,MatMenuModule,
  MatListModule,MatDividerModule,MatGridListModule,
  MatExpansionModule,MatCardModule,MatStepperModule,
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
