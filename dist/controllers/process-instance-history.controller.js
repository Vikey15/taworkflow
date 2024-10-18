"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessInstanceHistoryController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProcessInstanceHistoryController = class ProcessInstanceHistoryController {
    constructor(processInstanceHistoryRepository) {
        this.processInstanceHistoryRepository = processInstanceHistoryRepository;
    }
    async create(processInstanceHistory) {
        return this.processInstanceHistoryRepository.create(processInstanceHistory);
    }
    async count(where) {
        return this.processInstanceHistoryRepository.count(where);
    }
    async find(filter) {
        return this.processInstanceHistoryRepository.find(filter);
    }
    async updateAll(processInstanceHistory, where) {
        return this.processInstanceHistoryRepository.updateAll(processInstanceHistory, where);
    }
    async findById(id, filter) {
        return this.processInstanceHistoryRepository.findById(id, filter);
    }
    async updateById(id, processInstanceHistory) {
        await this.processInstanceHistoryRepository.updateById(id, processInstanceHistory);
    }
    async replaceById(id, processInstanceHistory) {
        await this.processInstanceHistoryRepository.replaceById(id, processInstanceHistory);
    }
    async deleteById(id) {
        await this.processInstanceHistoryRepository.deleteById(id);
    }
};
exports.ProcessInstanceHistoryController = ProcessInstanceHistoryController;
tslib_1.__decorate([
    (0, rest_1.post)('/process-instance-histories'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstanceHistory model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstanceHistory) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstanceHistory, {
                    title: 'NewProcessInstanceHistory',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProcessInstanceHistory]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/process-instance-histories/count'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstanceHistory model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ProcessInstanceHistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/process-instance-histories'),
    (0, rest_1.response)(200, {
        description: 'Array of ProcessInstanceHistory model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstanceHistory, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ProcessInstanceHistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/process-instance-histories'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstanceHistory PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstanceHistory, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ProcessInstanceHistory)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProcessInstanceHistory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/process-instance-histories/{id}'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstanceHistory model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstanceHistory, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ProcessInstanceHistory, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/process-instance-histories/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProcessInstanceHistory PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstanceHistory, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProcessInstanceHistory]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/process-instance-histories/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProcessInstanceHistory PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProcessInstanceHistory]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/process-instance-histories/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProcessInstanceHistory DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceHistoryController.prototype, "deleteById", null);
exports.ProcessInstanceHistoryController = ProcessInstanceHistoryController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProcessInstanceHistoryRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProcessInstanceHistoryRepository])
], ProcessInstanceHistoryController);
//# sourceMappingURL=process-instance-history.controller.js.map