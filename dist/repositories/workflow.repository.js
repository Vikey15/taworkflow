"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let WorkflowRepository = class WorkflowRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Workflow, dataSource);
    }
};
exports.WorkflowRepository = WorkflowRepository;
exports.WorkflowRepository = WorkflowRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.PostgresDataSource')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource])
], WorkflowRepository);
//# sourceMappingURL=workflow.repository.js.map