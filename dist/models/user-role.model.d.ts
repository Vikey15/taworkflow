import { Entity } from '@loopback/repository';
import { Role } from './role.model';
import { User } from './user.model';
export declare class UserRole extends Entity {
    userRoleId?: string;
    user_id?: string;
    role_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<UserRole>);
}
export interface UserRoleRelations {
    user?: User;
    role?: Role;
}
export type UserRoleWithRelations = UserRole & UserRoleRelations;
