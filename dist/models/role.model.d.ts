import { Entity } from '@loopback/repository';
import { Status } from './status.model';
export declare class Role extends Entity {
    roleId?: string;
    name: string;
    status_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
    status?: Status;
}
export type RoleWithRelations = Role & RoleRelations;
