import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { WorkflowTaskType, WorkflowTaskTypeRelations } from '../models';
export declare class WorkflowTaskTypeRepository extends DefaultCrudRepository<WorkflowTaskType, typeof WorkflowTaskType.prototype.workflowTaskTypeId, WorkflowTaskTypeRelations> {
    constructor(dataSource: juggler.DataSource);
}
