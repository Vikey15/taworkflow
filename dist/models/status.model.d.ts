import { Entity } from '@loopback/repository';
import { Tenant } from './tenant.model';
declare const Status_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class Status extends Status_base {
    statusId: string;
    name: string;
    createdBy?: string;
    updatedBy?: string;
    tenant_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<Status>);
}
export interface StatusRelations {
    tenant?: Tenant;
}
export type StatusWithRelations = Status & StatusRelations;
export {};
