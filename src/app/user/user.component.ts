import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({
    required: true,
  })
  id!: string;
  @Input({
    required: true,
  })
  avatar!: string;
  @Input({
    required: true,
  })
  name!: string;

  @Output() onSelectedUserEvent = new EventEmitter<string>();

  get avatarPath() {
    return this.avatar;
  }

  onSelectUser() {
    this.onSelectedUserEvent.emit(this.id);
  }
}
