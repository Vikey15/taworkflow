import { Entity } from '@loopback/repository';
import { Event } from './event.model';
import { Status } from './status.model';
import { Tenant } from './tenant.model';
declare const Workflow_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class Workflow extends Workflow_base {
    workflowId: string;
    name: string;
    description?: string;
    definition?: string;
    uiConfig?: string;
    createdBy?: string;
    updatedBy?: string;
    tenant_id?: string;
    status_id?: string;
    event_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<Workflow>);
}
export interface WorkflowRelations {
    tenant?: Tenant;
    status?: Status;
    event?: Event;
}
export type WorkflowWithRelations = Workflow & WorkflowRelations;
export {};
