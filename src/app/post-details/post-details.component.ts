import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment.model';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [ PostService, CommentService, AuthGuardService ]
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  postToDisplay: Post;
  commentsToDisplay: Comment[] = [];
  editingTime = false;

  //@Output() clickedEdit = new EventEmitter();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private postService: PostService,
    private commentService: CommentService,
    private authGuardService: AuthGuardService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });

    this.postService.getPostById(this.postId).subscribe(dataLastEmittedFromObserver => {
      this.postToDisplay = new Post(dataLastEmittedFromObserver.title,
                                    dataLastEmittedFromObserver.text);
      this.postToDisplay.date = dataLastEmittedFromObserver.date;
      this.postToDisplay.edited = dataLastEmittedFromObserver.edited;
    });

    this.commentService.getCommentsByPostId(this.postId).subscribe(dataLastEmittedFromObserver => { dataLastEmittedFromObserver.forEach(thisComment => {
      let tempComment = new Comment(thisComment.commentText);
      tempComment.date = thisComment.date;
      this.commentsToDisplay.push(tempComment);

      });
    });
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
