import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css'],
  providers: [ CommentService ]
})
export class CommentNewComponent implements OnInit {
  @Input() PostId: string;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  postComment(commentText: string) {
    this.commentService.addComment((new Comment(commentText)), this.PostId);
  }
}
