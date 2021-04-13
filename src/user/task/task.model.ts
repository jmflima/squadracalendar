import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../user.model';

@Table  //criado com (nest g mo user)
export class Task extends Model {
  @Column
  descricao: string;

  @Column
  data: Date;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

}