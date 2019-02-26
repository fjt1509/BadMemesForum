import {Comment} from './comment.model';

export class Post  {
  id?: string;
  postName: string;
  postDescription: string;
  comments?: Comment[];
}
