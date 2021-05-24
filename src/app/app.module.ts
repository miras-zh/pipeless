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
// import { AboutComponent } from './about/about.component';
// import { AboutExtraComponent } from './about/about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AboutPageModule } from './about/about-page.module';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { TranslateComponentComponent } from './translate-component/translate-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Material
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { SubMenuLayerComponent } from './sub-menu-layer/sub-menu-layer.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
    HttpComponent,
    Http2Component,
    // AboutComponent,
    // AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    ErrorPageComponent,
    ModalComponent,
    TranslateComponentComponent,
    SubMenuComponent,
    SubMenuLayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AboutPageModule,
    SharedModule,
    TranslocoRootModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
