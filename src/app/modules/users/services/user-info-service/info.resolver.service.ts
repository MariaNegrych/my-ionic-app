import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserModel} from '../../../../models/UserModel';
import {Observable} from 'rxjs';
import {InfoService} from './info.service';

@Injectable({
  providedIn: 'root'
})
export class InfoResolverService implements Resolve<UserModel>{

  constructor(private infoService: InfoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> | Promise<UserModel> | UserModel {
    const {id} = route.params;

    return this.infoService.getUser(id);
  }
}
