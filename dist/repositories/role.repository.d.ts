import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Role, RoleRelations } from '../models';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.roleId, RoleRelations> {
    constructor(dataSource: juggler.DataSource);
}
