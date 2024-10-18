import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tenant } from '../models';
import { TenantRepository } from '../repositories';
export declare class TenantController {
    tenantRepository: TenantRepository;
    constructor(tenantRepository: TenantRepository);
    create(tenant: Tenant): Promise<Tenant>;
    count(where?: Where<Tenant>): Promise<Count>;
    find(filter?: Filter<Tenant>): Promise<Tenant[]>;
    updateAll(tenant: Tenant, where?: Where<Tenant>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Tenant>): Promise<Tenant>;
    updateById(id: string, tenant: Tenant): Promise<void>;
    replaceById(id: string, tenant: Tenant): Promise<void>;
    deleteById(id: string): Promise<void>;
}
