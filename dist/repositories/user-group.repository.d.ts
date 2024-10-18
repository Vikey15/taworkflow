import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { UserGroup, UserGroupRelations } from '../models';
export declare class UserGroupRepository extends DefaultCrudRepository<UserGroup, typeof UserGroup.prototype.userGroupId, UserGroupRelations> {
    constructor(dataSource: juggler.DataSource);
}
