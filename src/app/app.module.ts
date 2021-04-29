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
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
    HttpComponent,
    Http2Component,
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent
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
