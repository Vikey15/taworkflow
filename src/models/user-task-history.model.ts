import {belongsTo, Entity, model, property} from '@loopback/repository';
import {ProcessInstance} from './process-instance.model'; // Adjust the import path as necessary
import {Status} from './status.model'; // Adjust the import path as necessary
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'user_task_history', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class UserTaskHistory extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuid', // Default function for ID generation
    postgresql: {
      columnName: 'user_task_history_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  userTaskHistoryId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'task_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  taskId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'name',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  name?: string;

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
      columnName: 'reason',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  reason?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'business_key',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  businessKey?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'assignee',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  assignee?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'groups',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  groups?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'form_identifier',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  formIdentifier?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'form_data',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  formData?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'internal_task_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  internalTaskId?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'workflow_task_type',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  workflowTaskType?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'claimed_by',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  claimedBy?: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'claimed_date',
      dataType: 'timestamp without time zone',
    },
  })
  claimedDate?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'completed_by',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  completedBy?: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'completed_date',
      dataType: 'timestamp without time zone',
    },
  })
  completedDate?: string;

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
      columnName: 'due_date',
      dataType: 'timestamp without time zone',
    },
  })
  dueDate?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'task_type',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  taskType?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'deadline_data',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  deadlineData?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'task_search',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  taskSearch?: string;

  // Relations

  @belongsTo(() => Tenant, {name: 'tenant'})
  tenant_id?: string;

  @belongsTo(() => Status, {name: 'status'})
  status_id?: string;

  @belongsTo(() => ProcessInstance, {name: 'processInstance'})
  processInstance_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<UserTaskHistory>) {
    super(data);
  }
}

// Define relations for the UserTaskHistory class
export interface UserTaskHistoryRelations {
  tenant?: Tenant;
  status?: Status;
  processInstance?: ProcessInstance;
}

export type UserTaskHistoryWithRelations = UserTaskHistory &
  UserTaskHistoryRelations;
