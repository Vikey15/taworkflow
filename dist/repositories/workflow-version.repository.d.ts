import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { WorkflowVersion, WorkflowVersionRelations } from '../models';
export declare class WorkflowVersionRepository extends DefaultCrudRepository<WorkflowVersion, typeof WorkflowVersion.prototype.workflowVersionId, WorkflowVersionRelations> {
    constructor(dataSource: juggler.DataSource);
}
