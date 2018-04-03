import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  providers: [ PostService ]
})
export class PostEditComponent implements OnInit {
  @Input() postToEdit;
  @Input() editingTime;
  @Output() changeEditingTime = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    this.router.navigate(['/posts/' + this.postId]);
    this.editingTime = false;
    this.changeEditingTime.emit(false);
  }

  beginDeletingPost(postToDelete) {
    if(confirm("Are you sure you want to delete this post?")){
      this.postService.deletePost(postToDelete);
    }
  }





}
