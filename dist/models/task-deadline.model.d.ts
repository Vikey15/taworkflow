import { Entity } from '@loopback/repository';
import { Tenant } from './tenant.model';
import { UserTask } from './user-task.model';
declare const TaskDeadline_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class TaskDeadline extends TaskDeadline_base {
    taskDeadlineId: string;
    sequence?: string;
    actionJson?: string;
    tenant_id?: string;
    task_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<TaskDeadline>);
}
export interface TaskDeadlineRelations {
    tenant?: Tenant;
    userTask?: UserTask;
}
export type TaskDeadlineWithRelations = TaskDeadline & TaskDeadlineRelations;
export {};
