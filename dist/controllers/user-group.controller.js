"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGroupController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserGroupController = class UserGroupController {
    constructor(userGroupRepository) {
        this.userGroupRepository = userGroupRepository;
    }
    async create(userGroup) {
        return this.userGroupRepository.create(userGroup);
    }
    async count(where) {
        return this.userGroupRepository.count(where);
    }
    async find(filter) {
        return this.userGroupRepository.find(filter);
    }
    async updateAll(userGroup, where) {
        return this.userGroupRepository.updateAll(userGroup, where);
    }
    async findById(id, filter) {
        return this.userGroupRepository.findById(id, filter);
    }
    async updateById(id, userGroup) {
        await this.userGroupRepository.updateById(id, userGroup);
    }
    async replaceById(id, userGroup) {
        await this.userGroupRepository.replaceById(id, userGroup);
    }
    async deleteById(id) {
        await this.userGroupRepository.deleteById(id);
    }
};
exports.UserGroupController = UserGroupController;
tslib_1.__decorate([
    (0, rest_1.post)('/user-groups'),
    (0, rest_1.response)(200, {
        description: 'UserGroup model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.UserGroup) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserGroup, {
                    title: 'NewUserGroup',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserGroup]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-groups/count'),
    (0, rest_1.response)(200, {
        description: 'UserGroup model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.UserGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-groups'),
    (0, rest_1.response)(200, {
        description: 'Array of UserGroup model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.UserGroup, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.UserGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-groups'),
    (0, rest_1.response)(200, {
        description: 'UserGroup PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserGroup, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.UserGroup)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserGroup, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-groups/{id}'),
    (0, rest_1.response)(200, {
        description: 'UserGroup model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserGroup, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.UserGroup, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-groups/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserGroup PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserGroup, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserGroup]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/user-groups/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserGroup PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserGroup]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/user-groups/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserGroup DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserGroupController.prototype, "deleteById", null);
exports.UserGroupController = UserGroupController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserGroupRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserGroupRepository])
], UserGroupController);
//# sourceMappingURL=user-group.controller.js.map