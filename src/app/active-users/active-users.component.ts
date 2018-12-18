import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  /**
   * Will call the service to update
   * the list of the inactive users
   * @param id
   */
  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
