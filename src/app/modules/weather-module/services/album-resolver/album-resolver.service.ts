import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AlbumService} from '../album/album.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumResolverService implements Resolve<any>{

  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const {city} = route.params;
    return this.albumService.getAlbums(city);
  }
}
