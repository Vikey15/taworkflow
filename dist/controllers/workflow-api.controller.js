"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowApiController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const workflow_service_service_1 = require("../services/workflow-service.service");
let WorkflowApiController = class WorkflowApiController {
    constructor(workflowService) {
        this.workflowService = workflowService;
    }
    // Test endpoint
    // @get('/getTest', {
    //   responses: {
    //     '200': {
    //       description: 'Workflow Test',
    //       content: {'application/json': {schema: {type: 'string'}}},
    //     },
    //   },
    // })
    // getTest(): string {
    //   return this.workflowService.getTest();
    // }
    // Initiate Workflow endpoint
    initiateWorkflow(req) {
        return this.workflowService.initiateWorkflow(req);
    }
    // Bulk Initiate Workflow endpoint
    initiateBulkWorkflow(req) {
        return this.workflowService.initiateBulkWorkflow(req);
    }
    // Create Workflow endpoint
    createWorkflow(req) {
        return this.workflowService.createWorkflow(req);
    }
    // Update Workflow endpoint
    updateWorkflow(req) {
        return this.workflowService.updateWorkflow(req);
    }
    // Claim Task endpoint
    claimTask(req) {
        return this.workflowService.claimTask(req);
    }
    // Update Task endpoint
    updateTask(req) {
        return this.workflowService.updateTask(req);
    }
    // Get Event Parameters endpoint
    getEventParameters(req) {
        return this.workflowService.getEventParameters(req);
    }
    // Update Instance Data endpoint
    updateInstanceData(req) {
        return this.workflowService.updateInstanceData(req);
    }
    // Check Workflow Availability endpoint
    checkWorkflowAvailability(req) {
        return this.workflowService.checkWorkflowAvailability(req);
    }
    // Bulk User Task Update endpoint
    bulkUserTaskUpdate(req) {
        return this.workflowService.bulkUserTaskUpdate(req);
    }
};
exports.WorkflowApiController = WorkflowApiController;
tslib_1.__decorate([
    (0, rest_1.post)('/initiateWorkflow', {
        responses: {
            '200': {
                description: 'Initiate Workflow',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "initiateWorkflow", null);
tslib_1.__decorate([
    (0, rest_1.post)('/initiateBulkWorkflow', {
        responses: {
            '200': {
                description: 'Bulk Initiate Workflow',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "initiateBulkWorkflow", null);
tslib_1.__decorate([
    (0, rest_1.post)('/createWorkflow', {
        responses: {
            '200': {
                description: 'Create Workflow',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "createWorkflow", null);
tslib_1.__decorate([
    (0, rest_1.post)('/updateWorkflow', {
        responses: {
            '200': {
                description: 'Update Workflow',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "updateWorkflow", null);
tslib_1.__decorate([
    (0, rest_1.post)('/claimTask', {
        responses: {
            '200': {
                description: 'Claim Task',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "claimTask", null);
tslib_1.__decorate([
    (0, rest_1.post)('/updateTask', {
        responses: {
            '200': {
                description: 'Update Task',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "updateTask", null);
tslib_1.__decorate([
    (0, rest_1.post)('/getEventParameters', {
        responses: {
            '200': {
                description: 'Get Event Parameters',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "getEventParameters", null);
tslib_1.__decorate([
    (0, rest_1.post)('/updateInstanceData', {
        responses: {
            '200': {
                description: 'Update Instance Data',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "updateInstanceData", null);
tslib_1.__decorate([
    (0, rest_1.post)('/checkWorkflowAvailability', {
        responses: {
            '200': {
                description: 'Check Workflow Availability',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "checkWorkflowAvailability", null);
tslib_1.__decorate([
    (0, rest_1.post)('/bulkUserTaskUpdate', {
        responses: {
            '200': {
                description: 'Bulk User Task Update',
                content: { 'application/json': { schema: { type: 'object' } } },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Object)
], WorkflowApiController.prototype, "bulkUserTaskUpdate", null);
exports.WorkflowApiController = WorkflowApiController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('services.WorkflowService')),
    tslib_1.__metadata("design:paramtypes", [workflow_service_service_1.WorkflowService])
], WorkflowApiController);
//# sourceMappingURL=workflow-api.controller.js.map