"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UserRoleController = class UserRoleController {
    constructor(userRoleRepository) {
        this.userRoleRepository = userRoleRepository;
    }
    async create(userRole) {
        return this.userRoleRepository.create(userRole);
    }
    async count(where) {
        return this.userRoleRepository.count(where);
    }
    async find(filter) {
        return this.userRoleRepository.find(filter);
    }
    async updateAll(userRole, where) {
        return this.userRoleRepository.updateAll(userRole, where);
    }
    async findById(id, filter) {
        return this.userRoleRepository.findById(id, filter);
    }
    async updateById(id, userRole) {
        await this.userRoleRepository.updateById(id, userRole);
    }
    async replaceById(id, userRole) {
        await this.userRoleRepository.replaceById(id, userRole);
    }
    async deleteById(id) {
        await this.userRoleRepository.deleteById(id);
    }
};
exports.UserRoleController = UserRoleController;
tslib_1.__decorate([
    (0, rest_1.post)('/user-roles'),
    (0, rest_1.response)(200, {
        description: 'UserRole model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.UserRole) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserRole, {
                    title: 'NewUserRole',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserRole]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-roles/count'),
    (0, rest_1.response)(200, {
        description: 'UserRole model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.UserRole)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-roles'),
    (0, rest_1.response)(200, {
        description: 'Array of UserRole model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.UserRole, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.UserRole)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-roles'),
    (0, rest_1.response)(200, {
        description: 'UserRole PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserRole, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.UserRole)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.UserRole, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/user-roles/{id}'),
    (0, rest_1.response)(200, {
        description: 'UserRole model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserRole, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.UserRole, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/user-roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserRole PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.UserRole, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserRole]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/user-roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserRole PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.UserRole]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/user-roles/{id}'),
    (0, rest_1.response)(204, {
        description: 'UserRole DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRoleController.prototype, "deleteById", null);
exports.UserRoleController = UserRoleController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.UserRoleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRoleRepository])
], UserRoleController);
//# sourceMappingURL=user-role.controller.js.map