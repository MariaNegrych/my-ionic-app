import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  state = new BehaviorSubject([]);

  constructor() { }

  getState(){
    return this.state;
  }

  setState(value){
    this.state.next(value);
  }

  addState(value){
    const currentVal = this.state.value;

    this.state.next([...currentVal, value]);
  }
}
