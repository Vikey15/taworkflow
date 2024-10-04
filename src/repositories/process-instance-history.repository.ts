import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {
  ProcessInstanceHistory,
  ProcessInstanceHistoryRelations,
} from '../models';

export class ProcessInstanceHistoryRepository extends DefaultCrudRepository<
  ProcessInstanceHistory,
  typeof ProcessInstanceHistory.prototype.processInstanceId,
  ProcessInstanceHistoryRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(ProcessInstanceHistory, dataSource);
  }
}
