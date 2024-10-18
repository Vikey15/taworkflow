import { Entity } from '@loopback/repository';
export declare class UserGroup extends Entity {
    userGroupId?: string;
    group_id?: string;
    user_id?: string;
    [prop: string]: any;
    constructor(data?: Partial<UserGroup>);
}
export interface UserGroupRelations {
}
export type UserGroupWithRelations = UserGroup & UserGroupRelations;
