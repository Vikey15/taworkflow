"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowTaskTypeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WorkflowTaskTypeController = class WorkflowTaskTypeController {
    constructor(workflowTaskTypeRepository) {
        this.workflowTaskTypeRepository = workflowTaskTypeRepository;
    }
    async create(workflowTaskType) {
        return this.workflowTaskTypeRepository.create(workflowTaskType);
    }
    async count(where) {
        return this.workflowTaskTypeRepository.count(where);
    }
    async find(filter) {
        return this.workflowTaskTypeRepository.find(filter);
    }
    async updateAll(workflowTaskType, where) {
        return this.workflowTaskTypeRepository.updateAll(workflowTaskType, where);
    }
    async findById(id, filter) {
        return this.workflowTaskTypeRepository.findById(id, filter);
    }
    async updateById(id, workflowTaskType) {
        await this.workflowTaskTypeRepository.updateById(id, workflowTaskType);
    }
    async replaceById(id, workflowTaskType) {
        await this.workflowTaskTypeRepository.replaceById(id, workflowTaskType);
    }
    async deleteById(id) {
        await this.workflowTaskTypeRepository.deleteById(id);
    }
};
exports.WorkflowTaskTypeController = WorkflowTaskTypeController;
tslib_1.__decorate([
    (0, rest_1.post)('/workflow-task-types'),
    (0, rest_1.response)(200, {
        description: 'WorkflowTaskType model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowTaskType) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowTaskType, {
                    title: 'NewWorkflowTaskType',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WorkflowTaskType]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflow-task-types/count'),
    (0, rest_1.response)(200, {
        description: 'WorkflowTaskType model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.WorkflowTaskType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflow-task-types'),
    (0, rest_1.response)(200, {
        description: 'Array of WorkflowTaskType model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.WorkflowTaskType, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.WorkflowTaskType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/workflow-task-types'),
    (0, rest_1.response)(200, {
        description: 'WorkflowTaskType PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowTaskType, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.WorkflowTaskType)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WorkflowTaskType, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflow-task-types/{id}'),
    (0, rest_1.response)(200, {
        description: 'WorkflowTaskType model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowTaskType, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.WorkflowTaskType, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/workflow-task-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkflowTaskType PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowTaskType, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WorkflowTaskType]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/workflow-task-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkflowTaskType PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WorkflowTaskType]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/workflow-task-types/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkflowTaskType DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowTaskTypeController.prototype, "deleteById", null);
exports.WorkflowTaskTypeController = WorkflowTaskTypeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.WorkflowTaskTypeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WorkflowTaskTypeRepository])
], WorkflowTaskTypeController);
//# sourceMappingURL=workflow-task-type.controller.js.map