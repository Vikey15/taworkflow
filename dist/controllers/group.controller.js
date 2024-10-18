"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let GroupController = class GroupController {
    constructor(groupRepository) {
        this.groupRepository = groupRepository;
    }
    async create(group) {
        return this.groupRepository.create(group);
    }
    async count(where) {
        return this.groupRepository.count(where);
    }
    async find(filter) {
        return this.groupRepository.find(filter);
    }
    async updateAll(group, where) {
        return this.groupRepository.updateAll(group, where);
    }
    async findById(id, filter) {
        return this.groupRepository.findById(id, filter);
    }
    async updateById(id, group) {
        await this.groupRepository.updateById(id, group);
    }
    async replaceById(id, group) {
        await this.groupRepository.replaceById(id, group);
    }
    async deleteById(id) {
        await this.groupRepository.deleteById(id);
    }
};
exports.GroupController = GroupController;
tslib_1.__decorate([
    (0, rest_1.post)('/groups'),
    (0, rest_1.response)(200, {
        description: 'Group model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Group) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Group, {
                    title: 'NewGroup',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Group]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/groups/count'),
    (0, rest_1.response)(200, {
        description: 'Group model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Group)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/groups'),
    (0, rest_1.response)(200, {
        description: 'Array of Group model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Group, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Group)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/groups'),
    (0, rest_1.response)(200, {
        description: 'Group PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Group, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Group)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Group, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/groups/{id}'),
    (0, rest_1.response)(200, {
        description: 'Group model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Group, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Group, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/groups/{id}'),
    (0, rest_1.response)(204, {
        description: 'Group PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Group, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Group]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/groups/{id}'),
    (0, rest_1.response)(204, {
        description: 'Group PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Group]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/groups/{id}'),
    (0, rest_1.response)(204, {
        description: 'Group DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupController.prototype, "deleteById", null);
exports.GroupController = GroupController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.GroupRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.GroupRepository])
], GroupController);
//# sourceMappingURL=group.controller.js.map