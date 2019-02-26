import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumPostsRoutingModule } from './forum-posts-routing.module';
import { ForumPostDetailsComponent } from './forum-post-details/forum-post-details.component';

@NgModule({
  declarations: [ForumPostDetailsComponent],
  imports: [
    CommonModule,
    ForumPostsRoutingModule
  ]
})
export class ForumPostsModule { }
