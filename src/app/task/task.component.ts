import { Component, Input } from '@angular/core';
import { CurrentTaskComponent } from './current-task/current-task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { INewTask } from './new-task/types/new-task.model';
import { TaskService } from '../service/task/task.service';

@Component({
  selector: 'app-task',
  imports: [CurrentTaskComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) selectedUserName!: string;
  @Input({ required: true }) userId!: string;

  isAddingNewTask = false;

  constructor(private taskService: TaskService) {}

  get selectedUserCurrentTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCreateNewTask() {
    this.isAddingNewTask = true;
  }

  onCloseDialog() {
    this.isAddingNewTask = false;
  }
}
