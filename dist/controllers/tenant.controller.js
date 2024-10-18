"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TenantController = class TenantController {
    constructor(tenantRepository) {
        this.tenantRepository = tenantRepository;
    }
    async create(tenant) {
        return this.tenantRepository.create(tenant);
    }
    async count(where) {
        return this.tenantRepository.count(where);
    }
    async find(filter) {
        return this.tenantRepository.find(filter);
    }
    async updateAll(tenant, where) {
        return this.tenantRepository.updateAll(tenant, where);
    }
    async findById(id, filter) {
        return this.tenantRepository.findById(id, filter);
    }
    async updateById(id, tenant) {
        await this.tenantRepository.updateById(id, tenant);
    }
    async replaceById(id, tenant) {
        await this.tenantRepository.replaceById(id, tenant);
    }
    async deleteById(id) {
        await this.tenantRepository.deleteById(id);
    }
};
exports.TenantController = TenantController;
tslib_1.__decorate([
    (0, rest_1.post)('/tenants'),
    (0, rest_1.response)(200, {
        description: 'Tenant model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Tenant) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tenant, {
                    title: 'NewTenant',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tenant]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tenants/count'),
    (0, rest_1.response)(200, {
        description: 'Tenant model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Tenant)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tenants'),
    (0, rest_1.response)(200, {
        description: 'Array of Tenant model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Tenant, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Tenant)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tenants'),
    (0, rest_1.response)(200, {
        description: 'Tenant PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tenant, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Tenant)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Tenant, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/tenants/{id}'),
    (0, rest_1.response)(200, {
        description: 'Tenant model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tenant, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Tenant, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/tenants/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tenant PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Tenant, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tenant]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/tenants/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tenant PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Tenant]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/tenants/{id}'),
    (0, rest_1.response)(204, {
        description: 'Tenant DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TenantController.prototype, "deleteById", null);
exports.TenantController = TenantController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.TenantRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TenantRepository])
], TenantController);
//# sourceMappingURL=tenant.controller.js.map