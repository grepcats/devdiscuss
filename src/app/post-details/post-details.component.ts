import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment.model';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { AuthGuardService } from '../auth-guard.service';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [ PostService, CommentService, AuthGuardService, AuthenticationService ]
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  postToDisplay: Post;
  commentsToDisplay: Comment[] = [];
  editingTime = false;
  private user;

  private isLoggedIn: Boolean;

  //@Output() clickedEdit = new EventEmitter();


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private postService: PostService,
    private commentService: CommentService,
    private authGuardService: AuthGuardService,
    private authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
    if (user === null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      //this.userName = user.displayName;
    }
  });
}

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

    this.commentService.getCommentsByPostId(this.postId).subscribe(dataLastEmittedFromObserver => {
      this.commentsToDisplay = [];
      console.log(dataLastEmittedFromObserver);
      dataLastEmittedFromObserver.forEach(thisComment => {
      let tempComment = new Comment(thisComment.commentText);
      tempComment.date = thisComment.date;
      this.commentsToDisplay.push(tempComment);

      });
      console.log(this.commentsToDisplay)
    });
  }


  timeToEdit() {

    this.editingTime = true;
  }

  editingTimeIsFalse(newBool: boolean){
    this.editingTime = newBool;
  }


}
