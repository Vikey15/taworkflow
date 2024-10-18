import { Entity } from '@loopback/repository';
import { Status } from './status.model';
import { Tenant } from './tenant.model';
declare const ProcessInstanceHistory_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class ProcessInstanceHistory extends ProcessInstanceHistory_base {
    processInstanceId: string;
    workflowVersionId?: string;
    eventId?: string;
    instanceData?: string;
    executionData?: string;
    parentProcessInstanceId?: string;
    childProcessInstances?: string;
    createdBy?: string;
    updatedBy?: string;
    completedDate?: Date;
    tenant_id?: string;
    status_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<ProcessInstanceHistory>);
}
export interface ProcessInstanceHistoryRelations {
    tenant?: Tenant;
    status?: Status;
}
export type ProcessInstanceHistoryWithRelations = ProcessInstanceHistory & ProcessInstanceHistoryRelations;
export {};
