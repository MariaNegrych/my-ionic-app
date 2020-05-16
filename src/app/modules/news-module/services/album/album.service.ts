import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) {
  }
  getAlbums(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<any>(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-15&sortBy=publishedAt&apiKey=abc16442c74e4481a5c8c9038c2a10e9`);
}
}
