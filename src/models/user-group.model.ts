import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Group} from './group.model';
import {User} from './user.model';

@model({settings: {strict: false}})
export class UserGroup extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuid',
  })
  userGroupId?: string;

  @belongsTo(() => Group, {name: 'group'})
  group_id?: string;

  @belongsTo(() => User, {name: 'user'})
  user_id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserGroup>) {
    super(data);
  }
}

export interface UserGroupRelations {
  // describe navigational properties here
}

export type UserGroupWithRelations = UserGroup & UserGroupRelations;
