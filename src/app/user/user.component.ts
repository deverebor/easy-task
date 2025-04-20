import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './types/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) isUserSelected!: boolean;
  @Output() onSelectedUserEvent = new EventEmitter<string>();

  get avatarPath() {
    return this.user.avatar;
  }

  onSelectUser() {
    this.onSelectedUserEvent.emit(this.user.id);
  }
}
