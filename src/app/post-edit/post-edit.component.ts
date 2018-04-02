import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  providers: [ PostService ]
})
export class PostEditComponent implements OnInit {
  @Input() postToEdit;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  postId: string;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });

  }

  beginUpdatingPost(postToUpdate) {
    this.postService.updatePost(postToUpdate);
  }





}
