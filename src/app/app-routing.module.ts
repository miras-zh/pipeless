import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './http/http.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:id',component:PostComponent},
  {path:'http',component:HttpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
