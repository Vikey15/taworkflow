"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WorkflowController = class WorkflowController {
    constructor(workflowRepository) {
        this.workflowRepository = workflowRepository;
    }
    async create(workflow) {
        return this.workflowRepository.create(workflow);
    }
    async count(where) {
        return this.workflowRepository.count(where);
    }
    async find(filter) {
        return this.workflowRepository.find(filter);
    }
    async updateAll(workflow, where) {
        return this.workflowRepository.updateAll(workflow, where);
    }
    async findById(id, filter) {
        return this.workflowRepository.findById(id, filter);
    }
    async updateById(id, workflow) {
        await this.workflowRepository.updateById(id, workflow);
    }
    async replaceById(id, workflow) {
        await this.workflowRepository.replaceById(id, workflow);
    }
    async deleteById(id) {
        await this.workflowRepository.deleteById(id);
    }
};
exports.WorkflowController = WorkflowController;
tslib_1.__decorate([
    (0, rest_1.post)('/workflows'),
    (0, rest_1.response)(200, {
        description: 'Workflow model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Workflow) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Workflow, {
                    title: 'NewWorkflow',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Workflow]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflows/count'),
    (0, rest_1.response)(200, {
        description: 'Workflow model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Workflow)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflows'),
    (0, rest_1.response)(200, {
        description: 'Array of Workflow model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Workflow, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Workflow)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/workflows'),
    (0, rest_1.response)(200, {
        description: 'Workflow PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Workflow, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Workflow)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Workflow, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflows/{id}'),
    (0, rest_1.response)(200, {
        description: 'Workflow model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Workflow, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Workflow, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/workflows/{id}'),
    (0, rest_1.response)(204, {
        description: 'Workflow PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Workflow, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Workflow]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/workflows/{id}'),
    (0, rest_1.response)(204, {
        description: 'Workflow PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Workflow]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/workflows/{id}'),
    (0, rest_1.response)(204, {
        description: 'Workflow DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowController.prototype, "deleteById", null);
exports.WorkflowController = WorkflowController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.WorkflowRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WorkflowRepository])
], WorkflowController);
//# sourceMappingURL=workflow.controller.js.map