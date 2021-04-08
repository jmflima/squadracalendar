import { Column, Model, Table } from 'sequelize-typescript';

@Table  //criado com (nest g mo user)
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  telefone: string;
}