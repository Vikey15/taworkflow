import { Entity } from '@loopback/repository';
import { Status } from './status.model';
export declare class User extends Entity {
    userId?: string;
    username: string;
    password: string;
    createdDate?: string;
    modifiedDate?: string;
    createdBy?: string;
    modifiedBy?: string;
    status_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
    status?: Status;
}
export type UserWithRelations = User & UserRelations;
