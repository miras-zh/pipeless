import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService, Post} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!:Post ;
  constructor(private router:Router, private routeAktiv:ActivatedRoute, private postsService:PostsService) { }

  ngOnInit(): void {
    this.routeAktiv.params.subscribe((params:Params)=>{
      const idPost = parseInt(params.id);
      this.post = this.postsService.getById(idPost);
    })
  }

  goToPageTodo(){
    this.router.navigate(['posts'])
  }

  loadPost(){
    console.log('Load 4 post')
    this.router.navigate(['/posts',4])
    console.log('done')
    
  }
}
