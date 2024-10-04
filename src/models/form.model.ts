import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Status} from './status.model';
import {TimeStampMixin} from './timestamp.mixin';

@model({settings: {strict: false}})
export class Form extends TimeStampMixin(Entity) {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuid',
  })
  formId?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  schema?: string;

  @property({
    type: 'string',
  })
  formJson?: string;

  @belongsTo(() => Status, {name: 'status'})
  status_id?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Form>) {
    super(data);
  }
}

export interface FormRelations {
  // describe navigational properties here
  status?: Status;
}

export type FormWithRelations = Form & FormRelations;
