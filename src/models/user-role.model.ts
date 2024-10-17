import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Role} from './role.model';
import {User} from './user.model';

@model({
  settings: {
    postgresql: {
      table: 'user_role', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class UserRole extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  userRoleId?: string;

  @belongsTo(() => User, {name: 'user'})
  user_id?: string;

  @belongsTo(() => Role, {name: 'role'})
  role_id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserRole>) {
    super(data);
  }
}

export interface UserRoleRelations {
  // describe navigational properties here
  user?: User;
  role?: Role;
}

export type UserRoleWithRelations = UserRole & UserRoleRelations;
