import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { UserRole, UserRoleRelations } from '../models';
export declare class UserRoleRepository extends DefaultCrudRepository<UserRole, typeof UserRole.prototype.userRoleId, UserRoleRelations> {
    constructor(dataSource: juggler.DataSource);
}
