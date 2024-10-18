"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTaskController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserTaskController = class UserTaskController {
    constructor(userTaskRepository) {
        this.userTaskRepository = userTaskRepository;
    }
    async create(userTask) {
        return this.userTaskRepository.create(userTask);
    }
    async count(where) {
        return this.userTaskRepository.count(where);
    }
    async find(filter) {
        return this.userTaskRepository.find(filter);
    }
    async updateAll(userTask, where) {
        return this.userTaskRepository.updateAll(userTask, where);
    }
    async findById(id, filter) {
        return this.userTaskRepository.findById(id, filter);
    }
    async updateById(id, userTask) {
        await this.userTaskRepository.updateById(id, userTask);
    }
    async replaceById(id, userTask) {
        await this.userTaskRepository.replaceById(id, userTask);
    }
    async deleteById(id) {
        await this.userTaskRepository.deleteById(id);
    }
};
exports.UserTaskController = UserTaskController;
tslib_1.__decorate([
    (0, rest_1.post)('/user-tasks'),
    (0, rest_1.response)(200, {
        description: 'UserTask model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.UserTask) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTask, {
                    title: 'NewUserTask',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserTask]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-tasks/count'),
    (0, rest_1.response)(200, {
        description: 'UserTask model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.UserTask)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-tasks'),
    (0, rest_1.response)(200, {
        description: 'Array of UserTask model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.UserTask, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.UserTask)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-tasks'),
    (0, rest_1.response)(200, {
        description: 'UserTask PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTask, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.UserTask)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserTask, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-tasks/{id}'),
    (0, rest_1.response)(200, {
        description: 'UserTask model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTask, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.UserTask, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-tasks/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserTask PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTask, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserTask]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/user-tasks/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserTask PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserTask]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/user-tasks/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserTask DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskController.prototype, "deleteById", null);
exports.UserTaskController = UserTaskController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserTaskRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserTaskRepository])
], UserTaskController);
//# sourceMappingURL=user-task.controller.js.map