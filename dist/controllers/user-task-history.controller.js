"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTaskHistoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserTaskHistoryController = class UserTaskHistoryController {
    constructor(userTaskHistoryRepository) {
        this.userTaskHistoryRepository = userTaskHistoryRepository;
    }
    async create(userTaskHistory) {
        return this.userTaskHistoryRepository.create(userTaskHistory);
    }
    async count(where) {
        return this.userTaskHistoryRepository.count(where);
    }
    async find(filter) {
        return this.userTaskHistoryRepository.find(filter);
    }
    async updateAll(userTaskHistory, where) {
        return this.userTaskHistoryRepository.updateAll(userTaskHistory, where);
    }
    async findById(id, filter) {
        return this.userTaskHistoryRepository.findById(id, filter);
    }
    async updateById(id, userTaskHistory) {
        await this.userTaskHistoryRepository.updateById(id, userTaskHistory);
    }
    async replaceById(id, userTaskHistory) {
        await this.userTaskHistoryRepository.replaceById(id, userTaskHistory);
    }
    async deleteById(id) {
        await this.userTaskHistoryRepository.deleteById(id);
    }
};
exports.UserTaskHistoryController = UserTaskHistoryController;
tslib_1.__decorate([
    (0, rest_1.post)('/user-task-histories'),
    (0, rest_1.response)(200, {
        description: 'UserTaskHistory model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.UserTaskHistory) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTaskHistory, {
                    title: 'NewUserTaskHistory',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserTaskHistory]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-task-histories/count'),
    (0, rest_1.response)(200, {
        description: 'UserTaskHistory model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.UserTaskHistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-task-histories'),
    (0, rest_1.response)(200, {
        description: 'Array of UserTaskHistory model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.UserTaskHistory, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.UserTaskHistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-task-histories'),
    (0, rest_1.response)(200, {
        description: 'UserTaskHistory PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTaskHistory, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.UserTaskHistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserTaskHistory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-task-histories/{id}'),
    (0, rest_1.response)(200, {
        description: 'UserTaskHistory model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTaskHistory, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.UserTaskHistory, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-task-histories/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserTaskHistory PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserTaskHistory, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserTaskHistory]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/user-task-histories/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserTaskHistory PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserTaskHistory]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/user-task-histories/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserTaskHistory DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserTaskHistoryController.prototype, "deleteById", null);
exports.UserTaskHistoryController = UserTaskHistoryController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserTaskHistoryRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserTaskHistoryRepository])
], UserTaskHistoryController);
//# sourceMappingURL=user-task-history.controller.js.map