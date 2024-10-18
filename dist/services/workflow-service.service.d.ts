export declare class WorkflowService {
    private worflow;
    constructor();
    testMethod(): any;
    initiateWorkflow(req: any): object;
    initiateBulkWorkflow(req: any): object;
    createWorkflow(req: any): object;
    updateWorkflow(req: any): object;
    claimTask(req: any): object;
    updateTask(req: any): object;
    getEventParameters(req: any): object;
    updateInstanceData(req: any): object;
    checkWorkflowAvailability(req: any): object;
    bulkUserTaskUpdate(req: any): object;
}
