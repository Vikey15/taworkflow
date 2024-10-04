import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {WorkflowApi, WorkflowApiRelations} from '../models';

export class WorkflowApiRepository extends DefaultCrudRepository<
  WorkflowApi,
  typeof WorkflowApi.prototype.id,
  WorkflowApiRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(WorkflowApi, dataSource);
  }
}
