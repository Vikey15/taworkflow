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

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Group>) {
    super(data); // Call the constructor of the base class

    // Initialize timestamps if not already set
    if (!data?.createdDate) {
      this.createdDate = new Date(); // Set createdDate to the current date
    }
    this.updatedDate = new Date(); // Set updatedDate to the current date
  }
}

export interface GroupRelations {
  // describe navigational properties here
}

export type GroupWithRelations = Group & GroupRelations;
