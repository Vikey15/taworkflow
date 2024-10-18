"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessInstanceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProcessInstanceController = class ProcessInstanceController {
    constructor(processInstanceRepository) {
        this.processInstanceRepository = processInstanceRepository;
    }
    async create(processInstance) {
        return this.processInstanceRepository.create(processInstance);
    }
    async count(where) {
        return this.processInstanceRepository.count(where);
    }
    async find(filter) {
        return this.processInstanceRepository.find(filter);
    }
    async updateAll(processInstance, where) {
        return this.processInstanceRepository.updateAll(processInstance, where);
    }
    async findById(id, filter) {
        return this.processInstanceRepository.findById(id, filter);
    }
    async updateById(id, processInstance) {
        await this.processInstanceRepository.updateById(id, processInstance);
    }
    async replaceById(id, processInstance) {
        await this.processInstanceRepository.replaceById(id, processInstance);
    }
    async deleteById(id) {
        await this.processInstanceRepository.deleteById(id);
    }
};
exports.ProcessInstanceController = ProcessInstanceController;
tslib_1.__decorate([
    (0, rest_1.post)('/process-instances'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstance model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstance) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstance, {
                    title: 'NewProcessInstance',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProcessInstance]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/process-instances/count'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstance model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ProcessInstance)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/process-instances'),
    (0, rest_1.response)(200, {
        description: 'Array of ProcessInstance model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstance, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.ProcessInstance)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/process-instances'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstance PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstance, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.ProcessInstance)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.ProcessInstance, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/process-instances/{id}'),
    (0, rest_1.response)(200, {
        description: 'ProcessInstance model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstance, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ProcessInstance, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/process-instances/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProcessInstance PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.ProcessInstance, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProcessInstance]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/process-instances/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProcessInstance PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.ProcessInstance]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/process-instances/{id}'),
    (0, rest_1.response)(204, {
        description: 'ProcessInstance DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ProcessInstanceController.prototype, "deleteById", null);
exports.ProcessInstanceController = ProcessInstanceController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProcessInstanceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProcessInstanceRepository])
], ProcessInstanceController);
//# sourceMappingURL=process-instance.controller.js.map