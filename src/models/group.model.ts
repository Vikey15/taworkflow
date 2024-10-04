import {Entity, model, property} from '@loopback/repository';
import {TimeStampMixin} from './timestamp.mixin';

@model({settings: {strict: false}})
export class Group extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuid',
  })
  groupId?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Group>) {
    super(data);
  }
}

export interface GroupRelations {
  // describe navigational properties here
}

export type GroupWithRelations = Group & GroupRelations;
