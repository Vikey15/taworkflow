import { Entity } from '@loopback/repository';
export declare class WorkflowApi extends Entity {
    id?: number;
    name: string;
    constructor(data?: Partial<WorkflowApi>);
}
export interface WorkflowApiRelations {
}
export type WorkflowApiWithRelations = WorkflowApi & WorkflowApiRelations;
