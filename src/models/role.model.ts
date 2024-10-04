import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Status} from './status.model';

@model({settings: {strict: false}})
export class Role extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  roleId?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @belongsTo(() => Status, {name: 'status'})
  status_id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
  status?: Status;
}

export type RoleWithRelations = Role & RoleRelations;
