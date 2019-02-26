import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumPostsRoutingModule } from './forum-posts-routing.module';
import { ForumPostDetailsComponent } from './forum-post-details/forum-post-details.component';
import {ForumPostListComponent} from './forum-post-list/forum-post-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MzButtonModule, MzCardModule, MzIconMdiModule, MzIconModule, MzInputModule} from 'ngx-materialize';
import { ForumPostAddComponent } from './forum-post-add/forum-post-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ForumPostDetailsComponent,
  ForumPostListComponent,
  ForumPostAddComponent],
  imports: [
    CommonModule,
    ForumPostsRoutingModule,
    FlexLayoutModule,
    MzCardModule,
    MzButtonModule,
    MzIconModule,
    MzIconMdiModule,
    MzInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ForumPostsModule { }
