import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Group, GroupRelations } from '../models';
export declare class GroupRepository extends DefaultCrudRepository<Group, typeof Group.prototype.groupId, GroupRelations> {
    constructor(dataSource: juggler.DataSource);
}
