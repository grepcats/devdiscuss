import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [ PostService, CommentService ]
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  postToDisplay;
  commentsToDisplay;
  editingTime = false;

  //@Output() clickedEdit = new EventEmitter();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.postService.getPostById(this.postId);
    console.log("this is in post-details " + this.postToDisplay.title);
    this.commentsToDisplay = this.commentService.getCommentsByPostId(this.postId);
  }

  postComment(commentText: string) {
    this.commentService.addComment((new Comment(commentText)), this.postId);
  }

  timeToEdit() {
    this.editingTime = true;
  }

  editPost() {
      // this.router.navigate(['posts', this.postId])
  }
}
