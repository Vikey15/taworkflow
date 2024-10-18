import { Entity } from '@loopback/repository';
import { ProcessInstance } from './process-instance.model';
import { Status } from './status.model';
import { Tenant } from './tenant.model';
declare const UserTaskHistory_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class UserTaskHistory extends UserTaskHistory_base {
    userTaskHistoryId: string;
    taskId?: string;
    name?: string;
    description?: string;
    reason?: string;
    businessKey?: string;
    assignee?: string;
    groups?: string;
    formIdentifier?: string;
    formData?: string;
    internalTaskId?: string;
    workflowTaskType?: string;
    claimedBy?: string;
    claimedDate?: string;
    completedBy?: string;
    completedDate?: string;
    createdBy?: string;
    updatedBy?: string;
    dueDate?: string;
    taskType?: string;
    deadlineData?: string;
    taskSearch?: string;
    tenant_id?: string;
    status_id?: string;
    process_instance_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<UserTaskHistory>);
}
export interface UserTaskHistoryRelations {
    tenant?: Tenant;
    status?: Status;
    processInstance?: ProcessInstance;
}
export type UserTaskHistoryWithRelations = UserTaskHistory & UserTaskHistoryRelations;
export {};
