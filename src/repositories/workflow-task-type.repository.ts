import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {WorkflowTaskType, WorkflowTaskTypeRelations} from '../models';

export class WorkflowTaskTypeRepository extends DefaultCrudRepository<
  WorkflowTaskType,
  typeof WorkflowTaskType.prototype.workflowTaskTypeId,
  WorkflowTaskTypeRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(WorkflowTaskType, dataSource);
  }
}
