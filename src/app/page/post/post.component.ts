import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
post: any;

constructor(private route: ActivatedRoute){}
postId: string = ''

ngOnInit(){
  this.route.params.subscribe(params => {
    this.postId = params['postId'];
    this.post = {
      id: this.postId,
      title: params['title'],
      image: params['image'],
      content: params['content']
    }
  })
}
}
