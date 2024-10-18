import { WorkflowService } from '../services/workflow-service.service';
export declare class WorkflowApiController {
    private workflowService;
    constructor(workflowService: WorkflowService);
    initiateWorkflow(req: object): object;
    initiateBulkWorkflow(req: object): object;
    createWorkflow(req: object): object;
    updateWorkflow(req: object): object;
    claimTask(req: object): object;
    updateTask(req: object): object;
    getEventParameters(req: object): object;
    updateInstanceData(req: object): object;
    checkWorkflowAvailability(req: object): object;
    bulkUserTaskUpdate(req: object): object;
}
