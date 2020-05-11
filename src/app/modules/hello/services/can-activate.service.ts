import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {DataService} from './data.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate{

  constructor(private dataService: DataService) {
    this.dataService.getState().subscribe(value => console.log(value));
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const {id} = route.params;

    if (id <= 10 && id > 0) {
      this.dataService.addState(id);
    } else { alert('This page is not found!'); }

    return (id <= 10 && id > 0);
  }
}
