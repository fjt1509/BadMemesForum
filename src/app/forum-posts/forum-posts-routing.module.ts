import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumPostListComponent} from './forum-post-list/forum-post-list.component';

const routes: Routes = [
  {path: '', component: ForumPostListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumPostsRoutingModule { }
