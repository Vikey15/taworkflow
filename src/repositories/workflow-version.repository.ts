import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {WorkflowVersion, WorkflowVersionRelations} from '../models';

export class WorkflowVersionRepository extends DefaultCrudRepository<
  WorkflowVersion,
  typeof WorkflowVersion.prototype.workflowVersionId,
  WorkflowVersionRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(WorkflowVersion, dataSource);
  }
}
