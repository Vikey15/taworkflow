"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEndpointsController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ApiEndpointsController = class ApiEndpointsController {
    constructor(apiEndPointsRepository) {
        this.apiEndPointsRepository = apiEndPointsRepository;
    }
    async create(apiEndPoints) {
        return this.apiEndPointsRepository.create(apiEndPoints);
    }
    async count(where) {
        return this.apiEndPointsRepository.count(where);
    }
    async find(filter) {
        return this.apiEndPointsRepository.find(filter);
    }
    async updateAll(apiEndPoints, where) {
        return this.apiEndPointsRepository.updateAll(apiEndPoints, where);
    }
    async findById(id, filter) {
        return this.apiEndPointsRepository.findById(id, filter);
    }
    async updateById(id, apiEndPoints) {
        await this.apiEndPointsRepository.updateById(id, apiEndPoints);
    }
    async replaceById(id, apiEndPoints) {
        await this.apiEndPointsRepository.replaceById(id, apiEndPoints);
    }
    async deleteById(id) {
        await this.apiEndPointsRepository.deleteById(id);
    }
};
exports.ApiEndpointsController = ApiEndpointsController;
tslib_1.__decorate([
    (0, rest_1.post)('/api-end-points'),
    (0, rest_1.response)(200, {
        description: 'ApiEndPoints model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ApiEndPoints) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ApiEndPoints, {
                    title: 'NewApiEndPoints',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ApiEndPoints]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api-end-points/count'),
    (0, rest_1.response)(200, {
        description: 'ApiEndPoints model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ApiEndPoints)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api-end-points'),
    (0, rest_1.response)(200, {
        description: 'Array of ApiEndPoints model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ApiEndPoints, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ApiEndPoints)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/api-end-points'),
    (0, rest_1.response)(200, {
        description: 'ApiEndPoints PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ApiEndPoints, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ApiEndPoints)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ApiEndPoints, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/api-end-points/{id}'),
    (0, rest_1.response)(200, {
        description: 'ApiEndPoints model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ApiEndPoints, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ApiEndPoints, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/api-end-points/{id}'),
    (0, rest_1.response)(204, {
        description: 'ApiEndPoints PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ApiEndPoints, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ApiEndPoints]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/api-end-points/{id}'),
    (0, rest_1.response)(204, {
        description: 'ApiEndPoints PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ApiEndPoints]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/api-end-points/{id}'),
    (0, rest_1.response)(204, {
        description: 'ApiEndPoints DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ApiEndpointsController.prototype, "deleteById", null);
exports.ApiEndpointsController = ApiEndpointsController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ApiEndPointsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ApiEndPointsRepository])
], ApiEndpointsController);
//# sourceMappingURL=api-endpoints.controller.js.map