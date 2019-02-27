import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {promise} from 'selenium-webdriver';
import {Post} from './post.model';
import {Observable} from 'rxjs';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Comment} from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class ForumPostService {

  forumPostCollection: AngularFirestoreCollection<Post>;
  commentCollection: AngularFirestoreCollection<Comment>;
  forumPosts: Observable<Post[]>;

  constructor(private db: AngularFirestore) { }


  getForumPosts(): Observable<Post[]> {
    this.forumPostCollection = this.db.collection<Post>('post');
    return this.forumPosts = this.forumPostCollection.snapshotChanges().pipe(map( actions => {
      return actions.map( action => {
        const data = action.payload.doc.data() as Post;
        const id = action.payload.doc.id;
        return{id, ...data};
      });
    }));

  }

  getForumPostWithComments(id: string): Observable<any[]> {
    return this.db.collection<Post>('post').doc(id).collection('comments', ref => ref.orderBy('time')).valueChanges();
  }

  addForumPost(postTime: Date, postName: string, postDescription: string): Promise<any> {
    this.forumPostCollection = this.db.collection<Post>('post');
    return this.forumPostCollection.add({postTime, postName, postDescription});
  }


  getForumPostById(postId: string): Observable<Post> {
    return this.db.collection<Post>('post').doc(postId).valueChanges();
  }

  addComment(postId: string, comment: string, time: Date): Promise<any> {
    this.commentCollection = this.db.collection<Post>('post').doc(postId).collection<Comment>('comments');
    return this.commentCollection.add({comment, time});
  }
}
