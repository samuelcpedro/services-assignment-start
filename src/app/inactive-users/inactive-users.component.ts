import { UsersService } from './../services/users.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  /**
   * Will call the service to update
   * the list of the active users
   * @param id
   */
  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);

  }
}
