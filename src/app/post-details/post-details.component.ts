import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [ PostService ]
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private PostService: PostService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.postToDisplay = this.PostService.getPostById(this.postId);
  }

}
