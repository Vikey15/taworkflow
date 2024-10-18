"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StatusController = class StatusController {
    constructor(statusRepository) {
        this.statusRepository = statusRepository;
    }
    async create(status) {
        return this.statusRepository.create(status);
    }
    async count(where) {
        return this.statusRepository.count(where);
    }
    async find(filter) {
        return this.statusRepository.find(filter);
    }
    async updateAll(status, where) {
        return this.statusRepository.updateAll(status, where);
    }
    async findById(id, filter) {
        return this.statusRepository.findById(id, filter);
    }
    async updateById(id, status) {
        await this.statusRepository.updateById(id, status);
    }
    async replaceById(id, status) {
        await this.statusRepository.replaceById(id, status);
    }
    async deleteById(id) {
        await this.statusRepository.deleteById(id);
    }
};
exports.StatusController = StatusController;
tslib_1.__decorate([
    (0, rest_1.post)('/statuses'),
    (0, rest_1.response)(200, {
        description: 'Status model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Status) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Status, {
                    title: 'NewStatus',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Status]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/statuses/count'),
    (0, rest_1.response)(200, {
        description: 'Status model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Status)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/statuses'),
    (0, rest_1.response)(200, {
        description: 'Array of Status model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Status, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Status)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/statuses'),
    (0, rest_1.response)(200, {
        description: 'Status PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Status, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Status)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Status, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/statuses/{id}'),
    (0, rest_1.response)(200, {
        description: 'Status model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Status, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Status, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/statuses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Status PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Status, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Status]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/statuses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Status PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Status]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/statuses/{id}'),
    (0, rest_1.response)(204, {
        description: 'Status DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StatusController.prototype, "deleteById", null);
exports.StatusController = StatusController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.StatusRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StatusRepository])
], StatusController);
//# sourceMappingURL=status.controller.js.map