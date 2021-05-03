import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  showIds: boolean = false;
  constructor(private postsService: PostsService,
    private routeAktiv: ActivatedRoute,
    private router: Router) {
    this.posts = postsService.posts;
  }

  ngOnInit(): void {
    this.routeAktiv.queryParams.subscribe((params: Params) => {
      console.log('params query >', params);
      this.showIds = !!params.showIds
    })
  }

  showIdsProgram() {
    this.router.navigate(['/posts'],{
      queryParams:{
        showIds:true
      }
    })
  }






}
