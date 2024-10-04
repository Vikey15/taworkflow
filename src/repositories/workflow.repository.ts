import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Workflow, WorkflowRelations} from '../models';

export class WorkflowRepository extends DefaultCrudRepository<
  Workflow,
  typeof Workflow.prototype.workflowId,
  WorkflowRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(Workflow, dataSource);
  }
}
