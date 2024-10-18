"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Tenant = class Tenant extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Tenant = Tenant;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        required: true,
        postgresql: {
            columnName: 'tenant_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "tenantId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'tenant_name',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Tenant.prototype, "tenantName", void 0);
exports.Tenant = Tenant = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'tenant', // PostgreSQL table name
            },
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Tenant);
//# sourceMappingURL=tenant.model.js.map