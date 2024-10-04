import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {
      table: 'workflow_task_type', // PostgreSQL table name
    },
    validateUpsert: true, // Validate upserts
  },
})
export class WorkflowTaskType extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    postgresql: {
      columnName: 'workflow_task_type_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  workflowTaskTypeId: string;

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

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<WorkflowTaskType>) {
    super(data);
  }
}

// Define additional interfaces if needed
export interface WorkflowTaskTypeRelations {
  // Define relations if any in the future
}

export type WorkflowTaskTypeWithRelations = WorkflowTaskType &
  WorkflowTaskTypeRelations;
