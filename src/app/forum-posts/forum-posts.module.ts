import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumPostsRoutingModule } from './forum-posts-routing.module';
import { ForumPostDetailsComponent } from './forum-post-details/forum-post-details.component';
import {ForumPostListComponent} from './forum-post-list/forum-post-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [ForumPostDetailsComponent,
  ForumPostListComponent],
  imports: [
    CommonModule,
    ForumPostsRoutingModule,
    FlexLayoutModule
  ]
})
export class ForumPostsModule { }
