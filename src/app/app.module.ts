import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultByPipe } from './pipe/mult-by.pipe';
import { ExMarksPipe } from './pipe/ex-marks.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { AppCounterService } from './services/app-counter.services';
import { CounterComponent } from './counter/counter.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule }   from '@angular/common/http';
import { Http2Component } from './http2/http2.component';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
    HttpComponent,
    Http2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
