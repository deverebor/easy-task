import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './mock-data/users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser() {
    return DUMMY_USERS.find((users) => users.id === this.selectedUserId)!;
  }
}
