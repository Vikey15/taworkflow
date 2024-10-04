import {Entity, model, property} from '@loopback/repository';

@model()
export class WorkflowApi extends Entity {
  @property({
    type: 'number',
    id: true, // Marking it as the id property
    generated: true, // Automatically generated (e.g., auto-increment)
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Add more properties as needed

  constructor(data?: Partial<WorkflowApi>) {
    super(data);
  }
}

export interface WorkflowApiRelations {
  // Describe navigational properties here
}

export type WorkflowApiWithRelations = WorkflowApi & WorkflowApiRelations;
