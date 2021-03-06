import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>
  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts(){
    return this.posts;
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getPostById(postId: string){
    return this.database.object('posts/' + postId);
  }

  updatePost(localUpdatedPost) {
    let postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
    postEntryInFirebase.update({title: localUpdatedPost.title,
                                text: localUpdatedPost.text});
  }

  deletePost(deleteThisPost) {
    let postEntryInFirebase = this.getPostById(deleteThisPost.$key);
    postEntryInFirebase.remove();
  }

}
