import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { WorkflowVersion } from '../models';
import { WorkflowVersionRepository } from '../repositories';
export declare class WorkflowVersionController {
    workflowVersionRepository: WorkflowVersionRepository;
    constructor(workflowVersionRepository: WorkflowVersionRepository);
    create(workflowVersion: WorkflowVersion): Promise<WorkflowVersion>;
    count(where?: Where<WorkflowVersion>): Promise<Count>;
    find(filter?: Filter<WorkflowVersion>): Promise<WorkflowVersion[]>;
    updateAll(workflowVersion: WorkflowVersion, where?: Where<WorkflowVersion>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<WorkflowVersion>): Promise<WorkflowVersion>;
    updateById(id: string, workflowVersion: WorkflowVersion): Promise<void>;
    replaceById(id: string, workflowVersion: WorkflowVersion): Promise<void>;
    deleteById(id: string): Promise<void>;
}
