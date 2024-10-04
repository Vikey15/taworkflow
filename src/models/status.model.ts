import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'status', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class Status extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    required: true,
    postgresql: {
      columnName: 'status_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  statusId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'name',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'created_by',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  createdBy?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'updated_by',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  updatedBy?: string;

  // Relations

  @belongsTo(() => Tenant, {name: 'tenant'})
  tenant_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Status>) {
    super(data);
  }
}

// Define relations for the Status class
export interface StatusRelations {
  tenant?: Tenant;
}

export type StatusWithRelations = Status & StatusRelations;
