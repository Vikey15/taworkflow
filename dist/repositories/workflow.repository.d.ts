import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Workflow, WorkflowRelations } from '../models';
export declare class WorkflowRepository extends DefaultCrudRepository<Workflow, typeof Workflow.prototype.workflowId, WorkflowRelations> {
    constructor(dataSource: juggler.DataSource);
}
