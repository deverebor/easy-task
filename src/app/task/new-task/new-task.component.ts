import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task/task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() onCloseDialog = new EventEmitter<void>();

  private taskService = inject(TaskService);

  newTaskTitle = '';
  newTaskSummary = '';
  newTaskDate = '';

  onClose() {
    this.onCloseDialog.emit();
  }

  onSubmitNewTask() {
    this.taskService.createUserTasks(
      {
        title: this.newTaskTitle,
        summary: this.newTaskSummary,
        dueDate: this.newTaskDate,
      },
      this.userId
    );
    this.onClose();
  }
}
