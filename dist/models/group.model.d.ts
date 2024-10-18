import { Entity } from '@loopback/repository';
declare const Group_base: {
    new (...args: any[]): {
        createdDate?: Date | undefined;
        updatedDate?: Date | undefined;
        getId(): any;
        getIdObject(): Object;
        toJSON(): Object;
        toObject(options?: import("@loopback/repository").AnyObject | undefined): Object;
    };
} & typeof Entity;
export declare class Group extends Group_base {
    groupId?: string;
    name: string;
    [prop: string]: any;
    constructor(data?: Partial<Group>);
}
export interface GroupRelations {
}
export type GroupWithRelations = Group & GroupRelations;
export {};
