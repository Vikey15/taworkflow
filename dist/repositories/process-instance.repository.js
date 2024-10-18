"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessInstanceRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let ProcessInstanceRepository = class ProcessInstanceRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.ProcessInstance, dataSource);
    }
};
exports.ProcessInstanceRepository = ProcessInstanceRepository;
exports.ProcessInstanceRepository = ProcessInstanceRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.PostgresDataSource')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource])
], ProcessInstanceRepository);
//# sourceMappingURL=process-instance.repository.js.map