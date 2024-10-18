import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { TaskDeadline, TaskDeadlineRelations } from '../models';
export declare class TaskDeadlineRepository extends DefaultCrudRepository<TaskDeadline, typeof TaskDeadline.prototype.taskDeadlineId, TaskDeadlineRelations> {
    constructor(dataSource: juggler.DataSource);
}
