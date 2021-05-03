import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post, PostsService } from "./posts.service";

@Injectable({
    providedIn: 'root'
})
export class PostResolver implements Resolve<Post>{

constructor(private postService:PostsService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Post> | Promise<Post> | Post {
        const ids:number = parseInt(route.params.id)
        return this.postService.getById(ids);
    }
}