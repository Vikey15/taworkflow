"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDeadlineController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TaskDeadlineController = class TaskDeadlineController {
    constructor(taskDeadlineRepository) {
        this.taskDeadlineRepository = taskDeadlineRepository;
    }
    async create(taskDeadline) {
        return this.taskDeadlineRepository.create(taskDeadline);
    }
    async count(where) {
        return this.taskDeadlineRepository.count(where);
    }
    async find(filter) {
        return this.taskDeadlineRepository.find(filter);
    }
    async updateAll(taskDeadline, where) {
        return this.taskDeadlineRepository.updateAll(taskDeadline, where);
    }
    async findById(id, filter) {
        return this.taskDeadlineRepository.findById(id, filter);
    }
    async updateById(id, taskDeadline) {
        await this.taskDeadlineRepository.updateById(id, taskDeadline);
    }
    async replaceById(id, taskDeadline) {
        await this.taskDeadlineRepository.replaceById(id, taskDeadline);
    }
    async deleteById(id) {
        await this.taskDeadlineRepository.deleteById(id);
    }
};
exports.TaskDeadlineController = TaskDeadlineController;
tslib_1.__decorate([
    (0, rest_1.post)('/task-deadlines'),
    (0, rest_1.response)(200, {
        description: 'TaskDeadline model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.TaskDeadline) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TaskDeadline, {
                    title: 'NewTaskDeadline',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.TaskDeadline]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/task-deadlines/count'),
    (0, rest_1.response)(200, {
        description: 'TaskDeadline model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.TaskDeadline)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/task-deadlines'),
    (0, rest_1.response)(200, {
        description: 'Array of TaskDeadline model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.TaskDeadline, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.TaskDeadline)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/task-deadlines'),
    (0, rest_1.response)(200, {
        description: 'TaskDeadline PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TaskDeadline, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.TaskDeadline)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.TaskDeadline, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/task-deadlines/{id}'),
    (0, rest_1.response)(200, {
        description: 'TaskDeadline model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TaskDeadline, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.TaskDeadline, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/task-deadlines/{id}'),
    (0, rest_1.response)(204, {
        description: 'TaskDeadline PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.TaskDeadline, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.TaskDeadline]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/task-deadlines/{id}'),
    (0, rest_1.response)(204, {
        description: 'TaskDeadline PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.TaskDeadline]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/task-deadlines/{id}'),
    (0, rest_1.response)(204, {
        description: 'TaskDeadline DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TaskDeadlineController.prototype, "deleteById", null);
exports.TaskDeadlineController = TaskDeadlineController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TaskDeadlineRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TaskDeadlineRepository])
], TaskDeadlineController);
//# sourceMappingURL=task-deadline.controller.js.map