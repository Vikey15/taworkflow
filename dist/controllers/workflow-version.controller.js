"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowVersionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WorkflowVersionController = class WorkflowVersionController {
    constructor(workflowVersionRepository) {
        this.workflowVersionRepository = workflowVersionRepository;
    }
    async create(workflowVersion) {
        return this.workflowVersionRepository.create(workflowVersion);
    }
    async count(where) {
        return this.workflowVersionRepository.count(where);
    }
    async find(filter) {
        return this.workflowVersionRepository.find(filter);
    }
    async updateAll(workflowVersion, where) {
        return this.workflowVersionRepository.updateAll(workflowVersion, where);
    }
    async findById(id, filter) {
        return this.workflowVersionRepository.findById(id, filter);
    }
    async updateById(id, workflowVersion) {
        await this.workflowVersionRepository.updateById(id, workflowVersion);
    }
    async replaceById(id, workflowVersion) {
        await this.workflowVersionRepository.replaceById(id, workflowVersion);
    }
    async deleteById(id) {
        await this.workflowVersionRepository.deleteById(id);
    }
};
exports.WorkflowVersionController = WorkflowVersionController;
tslib_1.__decorate([
    (0, rest_1.post)('/workflow-versions'),
    (0, rest_1.response)(200, {
        description: 'WorkflowVersion model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowVersion) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowVersion, {
                    title: 'NewWorkflowVersion',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WorkflowVersion]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflow-versions/count'),
    (0, rest_1.response)(200, {
        description: 'WorkflowVersion model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.WorkflowVersion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflow-versions'),
    (0, rest_1.response)(200, {
        description: 'Array of WorkflowVersion model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.WorkflowVersion, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.WorkflowVersion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/workflow-versions'),
    (0, rest_1.response)(200, {
        description: 'WorkflowVersion PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowVersion, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.WorkflowVersion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.WorkflowVersion, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/workflow-versions/{id}'),
    (0, rest_1.response)(200, {
        description: 'WorkflowVersion model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowVersion, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.WorkflowVersion, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/workflow-versions/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkflowVersion PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.WorkflowVersion, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WorkflowVersion]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/workflow-versions/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkflowVersion PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.WorkflowVersion]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/workflow-versions/{id}'),
    (0, rest_1.response)(204, {
        description: 'WorkflowVersion DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkflowVersionController.prototype, "deleteById", null);
exports.WorkflowVersionController = WorkflowVersionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.WorkflowVersionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WorkflowVersionRepository])
], WorkflowVersionController);
//# sourceMappingURL=workflow-version.controller.js.map