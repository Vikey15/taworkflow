import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {
      table: 'tenant', // PostgreSQL table name
    },
    validateUpsert: true, // Validate upserts
  },
})
export class Tenant extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    postgresql: {
      columnName: 'tenant_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  tenantId: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'tenant_name',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  tenantName: string;

  constructor(data?: Partial<Tenant>) {
    super(data);
  }
}

// Define the relations interface for the Tenant class (currently empty)
export interface TenantRelations {
  // Define navigational properties here if needed in the future
}

export type TenantWithRelations = Tenant & TenantRelations;
