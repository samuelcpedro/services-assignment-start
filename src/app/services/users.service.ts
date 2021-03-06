import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  /**
   * Will insert a active user to the inactive
   * and remove that user from the active
   * @param id position of the users in the array
   */
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.addInactiveUser();
  }

  /**
   * Will insert a inactive user to the active
   * and remove that user from the inactive
   *
   * @param id
   */
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.addActiveUser();
  }
}
