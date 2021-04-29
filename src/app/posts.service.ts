import { Injectable } from '@angular/core';

export interface Post{
  title:string,
  text:string,
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:Post[]=[
    {title:'Post1',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corrupti', id:1},
    {title:'Post2',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corrupti', id:2},
    {title:'Post3',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corrupti', id:3},
    {title:'Post4',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, corrupti', id:4},
  ]

  constructor() { }

  getById(id:number){
    return this.posts.find((p)=>{
      p.id == id
    })
  }
}
