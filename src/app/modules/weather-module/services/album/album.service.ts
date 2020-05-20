import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) {
  }
  getAlbums(city: string): Observable<any> {
     return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c52fb282cd5ba4725eea10f4073f5a5&units=metric`);
}
}
