import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {promise} from 'selenium-webdriver';
import {Post} from './post.model';

@Injectable({
  providedIn: 'root'
})
export class ForumPostService {

  forumPostCollection: AngularFirestoreCollection<Post>

  constructor(private db: AngularFirestore) { }


  addForumPost(postTime: Date, postName: string, postDescription: string): Promise<any> {

    const forumPostCollection = this.db.collection<Post>('post');
    return forumPostCollection.add({postTime, postName, postDescription});
  }


}
