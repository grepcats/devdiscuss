import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [ PostService, CommentService ]
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
  }

  postComment(commentText: string) {
    this.commentService.addComment((new Comment(commentText)), this.postId);
  }
}
