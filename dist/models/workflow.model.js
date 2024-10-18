"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workflow = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const event_model_1 = require("./event.model"); // Adjust the import path as necessary
const status_model_1 = require("./status.model"); // Adjust the import path as necessary
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
let Workflow = class Workflow extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.Workflow = Workflow;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
        postgresql: {
            columnName: 'workflow_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Workflow.prototype, "workflowId", void 0);
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
], Workflow.prototype, "name", void 0);
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
], Workflow.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'definition',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Workflow.prototype, "definition", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        postgresql: {
            columnName: 'ui_config',
            dataType: 'character varying',
            dataLength: 500000,
        },
    }),
    tslib_1.__metadata("design:type", String)
], Workflow.prototype, "uiConfig", void 0);
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
], Workflow.prototype, "createdBy", void 0);
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
], Workflow.prototype, "updatedBy", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], Workflow.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status' }),
    tslib_1.__metadata("design:type", String)
], Workflow.prototype, "status_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => event_model_1.Event, { name: 'event' }),
    tslib_1.__metadata("design:type", String)
], Workflow.prototype, "event_id", void 0);
exports.Workflow = Workflow = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'workflow', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Workflow);
//# sourceMappingURL=workflow.model.js.map