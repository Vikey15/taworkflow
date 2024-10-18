import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Workflow } from '../models';
import { WorkflowRepository } from '../repositories';
export declare class WorkflowController {
    workflowRepository: WorkflowRepository;
    constructor(workflowRepository: WorkflowRepository);
    create(workflow: Workflow): Promise<Workflow>;
    count(where?: Where<Workflow>): Promise<Count>;
    find(filter?: Filter<Workflow>): Promise<Workflow[]>;
    updateAll(workflow: Workflow, where?: Where<Workflow>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Workflow>): Promise<Workflow>;
    updateById(id: string, workflow: Workflow): Promise<void>;
    replaceById(id: string, workflow: Workflow): Promise<void>;
    deleteById(id: string): Promise<void>;
}
