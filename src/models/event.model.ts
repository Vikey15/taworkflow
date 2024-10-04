import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Status} from './status.model'; // Adjust the import path as necessary
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'event', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class Event extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuid', // Default function for ID generation
    postgresql: {
      columnName: 'event_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  eventId: string;

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
      columnName: 'description',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'event_key',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  eventKey?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'parent_event_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  parentEventId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'parameters_schema',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  parametersSchema?: string;

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

  @property({
    type: 'string',
    postgresql: {
      columnName: 'endpoint_key',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  endpointKey?: string;

  // Relations

  @belongsTo(() => Tenant, {name: 'tenant'})
  tenant_id?: string;

  @belongsTo(() => Status, {name: 'status'})
  status_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Event>) {
    super(data);
  }
}

// Define relations for the Event class
export interface EventRelations {
  tenant?: Tenant;
  status?: Status;
}

export type EventWithRelations = Event & EventRelations;
