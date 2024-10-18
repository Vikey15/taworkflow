import { Entity } from '@loopback/repository';
export declare class Tenant extends Entity {
    tenantId: string;
    tenantName: string;
    constructor(data?: Partial<Tenant>);
}
export interface TenantRelations {
}
export type TenantWithRelations = Tenant & TenantRelations;
