import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary
import {Workflow} from './workflow.model'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'workflow_version', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class WorkflowVersion extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    required: true,
    defaultFn: 'uuid', // Default function for ID generation
    postgresql: {
      columnName: 'workflow_version_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  workflowVersionId: string;

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
      columnName: 'ui_config',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  uiConfig?: string;

  // Relations
  @belongsTo(() => Tenant, {name: 'tenant'})
  tenant_id?: string;

  @belongsTo(() => Workflow, {name: 'workflow'})
  workflow_id: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<WorkflowVersion>) {
    super(data);
  }
}

// Define relations for the WorkflowVersion class
export interface WorkflowVersionRelations {
  tenant?: Tenant;
  workflow?: Workflow;
}

export type WorkflowVersionWithRelations = WorkflowVersion &
  WorkflowVersionRelations;
