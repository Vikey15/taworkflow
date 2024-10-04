import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Status} from './status.model'; // Adjust the import path as necessary
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'process_instance_history', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class ProcessInstanceHistory extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    required: true,
    defaultFn: 'uuid', // Default function for ID generation
    postgresql: {
      columnName: 'process_instance_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  processInstanceId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'workflow_version_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  workflowVersionId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'event_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  eventId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'instance_data',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  instanceData?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'execution_data',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  executionData?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'parent_process_instance_id',
      dataType: 'character varying',
      dataLength: 100,
    },
  })
  parentProcessInstanceId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'child_process_instances',
      dataType: 'text',
    },
  })
  childProcessInstances?: string;

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
    type: 'date',
    postgresql: {
      columnName: 'completed_date',
      dataType: 'timestamp without time zone',
    },
  })
  completedDate?: Date;

  // Relations

  @belongsTo(() => Tenant, {name: 'tenant'})
  tenant_id?: string;

  @belongsTo(() => Status, {name: 'status'})
  status_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<ProcessInstanceHistory>) {
    super(data);
  }
}

// Define relations for the ProcessInstanceHistory class
export interface ProcessInstanceHistoryRelations {
  tenant?: Tenant;
  status?: Status;
}

export type ProcessInstanceHistoryWithRelations = ProcessInstanceHistory &
  ProcessInstanceHistoryRelations;
