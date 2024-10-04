import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {TaskDeadline, TaskDeadlineRelations} from '../models';

export class TaskDeadlineRepository extends DefaultCrudRepository<
  TaskDeadline,
  typeof TaskDeadline.prototype.taskDeadlineId,
  TaskDeadlineRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(TaskDeadline, dataSource);
  }
}
