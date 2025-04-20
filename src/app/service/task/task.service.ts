import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../mock-data/tasks';
import { INewTask } from '../../task/new-task/types/new-task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = DUMMY_TASKS;

  constructor() {}

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  createUserTasks(newTask: INewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId,
      ...newTask,
    });
  }

  deleteUserTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
