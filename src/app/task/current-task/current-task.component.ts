import { Component, inject, Input } from '@angular/core';
import { ITask } from './types/task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../service/task/task.service';

@Component({
  selector: 'app-current-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './current-task.component.html',
  styleUrl: './current-task.component.scss',
})
export class CurrentTaskComponent {
  @Input({ required: true }) task!: ITask;

  private taskService = inject(TaskService);

  onCompletedTask() {
    this.taskService.deleteUserTask(this.task.id);
  }
}
