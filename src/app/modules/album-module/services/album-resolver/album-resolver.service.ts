import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AlbumModel} from '../../../../models/AlbumModel';
import {AlbumService} from '../album/album.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumResolverService implements Resolve<AlbumModel[]>{

  constructor(private albumService: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AlbumModel[]> | Promise<AlbumModel[]> | AlbumModel[] {
    return this.albumService.getAlbums();
  }
}
