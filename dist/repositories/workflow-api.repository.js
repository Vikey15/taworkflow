"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowApiRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let WorkflowApiRepository = class WorkflowApiRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.WorkflowApi, dataSource);
    }
};
exports.WorkflowApiRepository = WorkflowApiRepository;
exports.WorkflowApiRepository = WorkflowApiRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.PostgresDataSource')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource])
], WorkflowApiRepository);
//# sourceMappingURL=workflow-api.repository.js.map