import { Entity } from '@loopback/repository';
import { Event } from './event.model';
import { Status } from './status.model';
import { Tenant } from './tenant.model';
import { WorkflowVersion } from './workflow-version.model';
declare const ProcessInstance_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class ProcessInstance extends ProcessInstance_base {
    processInstanceId: string;
    instanceData?: string;
    executionData?: string;
    parentProcessInstanceId?: string;
    childProcessInstances?: string;
    createdBy?: string;
    updatedBy?: string;
    tenant_id?: string;
    status_id?: string;
    workflow_version_id?: string;
    event_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<ProcessInstance>);
}
export interface ProcessInstanceRelations {
    tenant?: Tenant;
    status?: Status;
    workflowVersion?: WorkflowVersion;
    event?: Event;
}
export type ProcessInstanceWithRelations = ProcessInstance & ProcessInstanceRelations;
export {};
