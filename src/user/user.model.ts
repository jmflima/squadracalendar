import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Task } from './task/task.model';

@Table  //criado com (nest g mo user)
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  telefone: string;

  @HasMany(() => Task)
  task: Task[];
}