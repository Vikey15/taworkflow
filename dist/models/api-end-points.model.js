"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEndPoints = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const status_model_1 = require("./status.model"); // Adjust the path as necessary
const tenant_model_1 = require("./tenant.model"); // Adjust the path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
let ApiEndPoints = class ApiEndPoints extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.ApiEndPoints = ApiEndPoints;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
        postgresql: {
            columnName: 'endpoint_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "endpointId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'name',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'endpoint_key',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "endpointKey", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'description',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'method',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "method", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'url',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "url", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'input_template',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "inputTemplate", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'headers',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "headers", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'class_type',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "classType", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'authentication_endpoint_key',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "authenticationEndpointKey", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'output_mapping',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "outputMapping", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'created_by',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'updated_by',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'endpoint_type',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "endpointType", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant_id' }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status_id' }),
    tslib_1.__metadata("design:type", String)
], ApiEndPoints.prototype, "status_id", void 0);
exports.ApiEndPoints = ApiEndPoints = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'api_endpoints', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ApiEndPoints);
//# sourceMappingURL=api-end-points.model.js.map