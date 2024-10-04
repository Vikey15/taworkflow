import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Tenant} from './tenant.model'; // Adjust the import path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary
import {UserTask} from './user-task.model'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'task_deadline', // PostgreSQL table name
    },
    validateUpsert: true, // Validate upserts
    strict: true,
  },
})
export class TaskDeadline extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    required: true,
    defaultFn: 'uuid', // Default function to generate UUID
    postgresql: {
      columnName: 'task_deadline_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  taskDeadlineId: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'sequence',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  sequence?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'action_json',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  actionJson?: string;

  // Relations

  @belongsTo(() => Tenant, {name: 'tenant'})
  tenant_id?: string;

  @belongsTo(() => UserTask, {name: 'userTask'})
  task_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<TaskDeadline>) {
    super(data);
  }
}

// Define relations for the TaskDeadline class
export interface TaskDeadlineRelations {
  tenant?: Tenant;
  userTask?: UserTask;
}

export type TaskDeadlineWithRelations = TaskDeadline & TaskDeadlineRelations;
