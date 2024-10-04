import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Status} from './status.model'; // Adjust the path as necessary
import {Tenant} from './tenant.model'; // Adjust the path as necessary
import {TimeStampMixin} from './timestamp.mixin'; // Adjust the import path as necessary

@model({
  settings: {
    postgresql: {
      table: 'api_endpoints', // PostgreSQL table name
    },
    strict: true,
    validateUpsert: true, // Validate upserts
  },
})
export class ApiEndPoints extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    required: true,
    defaultFn: 'uuid', // Default function for ID generation
    postgresql: {
      columnName: 'endpoint_id',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  endpointId?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'name',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'endpoint_key',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  endpointKey?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'description',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'method',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  method?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'url',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  url?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'input_template',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  inputTemplate?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'headers',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  headers?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'class_type',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  classType?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'authentication_endpoint_key',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  authenticationEndpointKey?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'output_mapping',
      dataType: 'character varying',
      dataLength: 500000,
    },
  })
  outputMapping?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'created_by',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  createdBy?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'updated_by',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  updatedBy?: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'endpoint_type',
      dataType: 'character varying',
      dataLength: 255,
    },
  })
  endpointType?: string;

  // Relations

  @belongsTo(() => Tenant, {name: 'tenant_id'})
  tenant_id?: string;

  @belongsTo(() => Status, {name: 'status_id'})
  status_id?: string;

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<ApiEndPoints>) {
    super(data);
  }
}

export interface ApiEndPointsRelations {
  tenant?: Tenant;
  status?: Status;
}

export type ApiEndPointsWithRelations = ApiEndPoints & ApiEndPointsRelations;
