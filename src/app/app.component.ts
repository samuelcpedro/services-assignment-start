import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usersActive: string[];
  usersInactive: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    // usersActive and usersInactive will receive the the
    // reference of the values
    this.usersActive = this.usersService.activeUsers;
    this.usersInactive = this.usersService.inactiveUsers;
  }
}
