"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
let Status = class Status extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.Status = Status;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        required: true,
        postgresql: {
            columnName: 'status_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Status.prototype, "statusId", void 0);
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
], Status.prototype, "name", void 0);
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
], Status.prototype, "createdBy", void 0);
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
], Status.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], Status.prototype, "tenant_id", void 0);
exports.Status = Status = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'status', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Status);
//# sourceMappingURL=status.model.js.map