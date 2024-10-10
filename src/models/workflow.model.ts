import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Event} from './event.model'; // Adjust the import path as necessary
import {Status} from './status.model'; // Adjust the import path as necessary
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'workflow', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class Workflow extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuid', // Default function for ID generation
    postgresql: {
      columnName: 'workflow_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  workflowId: string;

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
      columnName: 'definition',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  definition?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'ui_config',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  uiConfig?: string;

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

  @belongsTo(() => Status, {name: 'status'})
  status_id?: string;

  @belongsTo(() => Event, {name: 'event'})
  event_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Workflow>) {
    super(data);
  }
}

// Define relations for the Workflow class
export interface WorkflowRelations {
  tenant?: Tenant;
  status?: Status;
  event?: Event;
}

export type WorkflowWithRelations = Workflow & WorkflowRelations;
