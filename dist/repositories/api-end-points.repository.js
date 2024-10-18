"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEndPointsRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let ApiEndPointsRepository = class ApiEndPointsRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.ApiEndPoints, dataSource);
    }
};
exports.ApiEndPointsRepository = ApiEndPointsRepository;
exports.ApiEndPointsRepository = ApiEndPointsRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.PostgresDataSource')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource])
], ApiEndPointsRepository);
//# sourceMappingURL=api-end-points.repository.js.map