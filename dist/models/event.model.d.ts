import { Entity } from '@loopback/repository';
import { Status } from './status.model';
import { Tenant } from './tenant.model';
declare const Event_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class Event extends Event_base {
    eventId: string;
    name: string;
    description?: string;
    eventKey?: string;
    parentEventId?: string;
    parametersSchema?: string;
    createdBy?: string;
    updatedBy?: string;
    endpointKey?: string;
    tenant_id?: string;
    status_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<Event>);
}
export interface EventRelations {
    tenant?: Tenant;
    status?: Status;
}
export type EventWithRelations = Event & EventRelations;
export {};
