import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {

  inactiveCount = 0;
  activeCount = 0;

  constructor() { }

  addActiveUser() {
    console.log('The # times that users been active ' + ++this.activeCount);
  }

  addInactiveUser() {
    console.log('The # times that users been inactive ' + ++this.inactiveCount);
  }
}
