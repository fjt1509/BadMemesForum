import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ForumPostService} from '../shared/forum-post.service';
import {Post} from '../shared/post.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-forum-post-details',
  templateUrl: './forum-post-details.component.html',
  styleUrls: ['./forum-post-details.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      state('in', style({opacity: 1})),

      transition(':enter', [
        style({opacity: 0}),
        animate(700 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ForumPostDetailsComponent implements OnInit {

  postId: string;
  post: Post;
  comments: Observable<any[]>;
  commentForm = new FormGroup( {
    comment: new FormControl('')
  })
  createComment: boolean;

  constructor(private router: Router, private postService: ForumPostService) { }

  ngOnInit() {
    const uri = this.router.url;
    this.postId = uri.substr(uri.lastIndexOf('/') + 1);

    this.postService.getForumPostById(this.postId).subscribe(postReturn => this.post = postReturn);
    this.comments = this.postService.getForumPostWithComments(this.postId);
    this.createComment = false;

  }

  convertDate(postTime: any) {
    const date = postTime.toDate();
    const dateString = date.toLocaleDateString();

    return 'Date: ' + dateString;

  }

  convertTime(time: any) {
    const date = time.toDate();
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();

    return 'Time: ' + hours + ':' + minutes.substr(-2);
  }

  onSubmit() {
    const date = new Date();
    const comment = this.commentForm.value;

    this.postService.addComment(this.postId, comment.comment, date).then( () => this.createComment = false);
  }
}
