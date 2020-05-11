import {Injectable} from '@angular/core';
import {CommentModel} from '../../../../models/CommentModel';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class CommentService {
//
//   API = 'https://jsonplaceholder.typicode.com/';
//
//   constructor(private httpClient: HttpClient) {
//   }
//   getComments(): Observable<CommentModel[]> {
//     return this.httpClient.get<CommentModel[]>(this.API + 'comments');
//   }
//   getAllCommentsOfPost(id): Observable<CommentModel[]> {
//     return this.httpClient.get<CommentModel[]>(this.API + `comments?postId=${id}`);
//   }
// }

export class CommentService {

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');

  }
  getPostComments(id): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
