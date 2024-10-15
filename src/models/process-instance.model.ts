import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Event} from './event.model'; // Adjust the import path as necessary
import {Status} from './status.model'; // Adjust the import path as necessary
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary
import {WorkflowVersion} from './workflow-version.model'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'process_instance', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class ProcessInstance extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
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

  // Relations

  @belongsTo(() => Tenant, {name: 'tenant'})
  tenant_id?: string;

  @belongsTo(() => Status, {name: 'status'})
  status_id?: string;

  @belongsTo(() => WorkflowVersion, {name: 'workflow_version'})
  workflow_version_id?: string;

  @belongsTo(() => Event, {name: 'event'})
  event_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<ProcessInstance>) {
    super(data);
  }
}

// Define relations for the ProcessInstance class
export interface ProcessInstanceRelations {
  tenant?: Tenant;
  status?: Status;
  workflowVersion?: WorkflowVersion;
  event?: Event;
}

export type ProcessInstanceWithRelations = ProcessInstance &
  ProcessInstanceRelations;
