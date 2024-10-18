import { Entity } from '@loopback/repository';
export declare class WorkflowTaskType extends Entity {
    workflowTaskTypeId: string;
    name: string;
    [prop: string]: any;
    constructor(data?: Partial<WorkflowTaskType>);
}
export interface WorkflowTaskTypeRelations {
}
export type WorkflowTaskTypeWithRelations = WorkflowTaskType & WorkflowTaskTypeRelations;
