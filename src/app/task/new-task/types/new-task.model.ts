import { ITask } from '../../current-task/types/task.model';

export interface INewTask extends Omit<ITask, 'id' | 'userId'> {}
