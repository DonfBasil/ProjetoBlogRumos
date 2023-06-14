import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    const savedPostsString = localStorage.getItem('posts');
    const savedPosts = savedPostsString ? JSON.parse(savedPostsString) : [];

    this.posts = savedPosts;
  }

  constructor(private router: Router){}

  openPost(post: any){
    this.router.navigate(['post', post])
  }
}
