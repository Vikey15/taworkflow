import { Entity } from '@loopback/repository';
import { Tenant } from './tenant.model';
import { Workflow } from './workflow.model';
declare const WorkflowVersion_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class WorkflowVersion extends WorkflowVersion_base {
    workflowVersionId: string;
    definition?: string;
    createdBy?: string;
    updatedBy?: string;
    uiConfig?: string;
    tenant_id?: string;
    workflow_id: string;
    [prop: string]: any;
    constructor(data?: Partial<WorkflowVersion>);
}
export interface WorkflowVersionRelations {
    tenant?: Tenant;
    workflow?: Workflow;
}
export type WorkflowVersionWithRelations = WorkflowVersion & WorkflowVersionRelations;
export {};
