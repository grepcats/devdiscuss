import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css'],
  providers: [PostService]
})
export class PostNewComponent implements OnInit {

  constructor(private postService: PostService) { }

  addPost(postTitle: string, postText: string) {
    let testPost = new Post(postTitle, postText);
    console.log(testPost);
    this.postService.addPost(new Post(postTitle, postText))
  }

  ngOnInit() {
  }

}
