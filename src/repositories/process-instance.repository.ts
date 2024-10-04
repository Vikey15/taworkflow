import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {ProcessInstance, ProcessInstanceRelations} from '../models';

export class ProcessInstanceRepository extends DefaultCrudRepository<
  ProcessInstance,
  typeof ProcessInstance.prototype.processInstanceId,
  ProcessInstanceRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(ProcessInstance, dataSource);
  }
}
