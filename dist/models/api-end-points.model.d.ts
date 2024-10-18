import { Entity } from '@loopback/repository';
import { Status } from './status.model';
import { Tenant } from './tenant.model';
declare const ApiEndPoints_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class ApiEndPoints extends ApiEndPoints_base {
    endpointId?: string;
    name: string;
    endpointKey?: string;
    description?: string;
    method?: string;
    url?: string;
    inputTemplate?: string;
    headers?: string;
    classType?: string;
    authenticationEndpointKey?: string;
    outputMapping?: string;
    createdBy?: string;
    updatedBy?: string;
    endpointType?: string;
    tenant_id?: string;
    status_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<ApiEndPoints>);
}
export interface ApiEndPointsRelations {
    tenant?: Tenant;
    status?: Status;
}
export type ApiEndPointsWithRelations = ApiEndPoints & ApiEndPointsRelations;
export {};
