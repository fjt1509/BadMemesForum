import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup} from '@angular/forms';
import {ForumPostService} from '../shared/forum-post.service';

@Component({
  selector: 'app-forum-post-add',
  templateUrl: './forum-post-add.component.html',
  styleUrls: ['./forum-post-add.component.css'],
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
export class ForumPostAddComponent implements OnInit {

  postForm = new FormGroup( {
    postName: new FormControl(''),
    postDescription: new FormControl('')
  })

  constructor(private postService: ForumPostService) { }

  ngOnInit() {
  }

  onSubmit() {
    const newPost = this.postForm.value;

    const time = new Date();
    const postName = newPost.postName;
    const postDescription = newPost.postDescription;

    this.postService.addForumPost(time, postName, postDescription).then( () => console.log('success'));
  }
}
