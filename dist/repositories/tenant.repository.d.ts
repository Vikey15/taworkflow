import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Tenant, TenantRelations } from '../models';
export declare class TenantRepository extends DefaultCrudRepository<Tenant, typeof Tenant.prototype.tenantId, TenantRelations> {
    constructor(dataSource: juggler.DataSource);
}
