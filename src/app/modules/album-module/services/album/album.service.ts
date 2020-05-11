import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AlbumModel} from '../../../../models/AlbumModel';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) {
  }
  getAlbums(): Observable<AlbumModel[]>{
    return this.httpClient.get<AlbumModel[]>(`https://jsonplaceholder.typicode.com/albums`)
}
}
