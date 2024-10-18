"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowVersion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const tenant_model_1 = require("./tenant.model"); // Adjust the import path as necessary
const timestamp_mixin_1 = require("./timestamp.mixin"); // Adjust the import path as necessary
const workflow_model_1 = require("./workflow.model"); // Adjust the import path as necessary
let WorkflowVersion = class WorkflowVersion extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.WorkflowVersion = WorkflowVersion;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
        postgresql: {
            columnName: 'workflow_version_id',
            dataType: 'character varying',
            dataLength: 255,
        },
    }),
    tslib_1.__metadata("design:type", String)
], WorkflowVersion.prototype, "workflowVersionId", void 0);
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
], WorkflowVersion.prototype, "definition", void 0);
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
], WorkflowVersion.prototype, "createdBy", void 0);
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
], WorkflowVersion.prototype, "updatedBy", void 0);
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
], WorkflowVersion.prototype, "uiConfig", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => tenant_model_1.Tenant, { name: 'tenant' }),
    tslib_1.__metadata("design:type", String)
], WorkflowVersion.prototype, "tenant_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => workflow_model_1.Workflow, { name: 'workflow' }),
    tslib_1.__metadata("design:type", String)
], WorkflowVersion.prototype, "workflow_id", void 0);
exports.WorkflowVersion = WorkflowVersion = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'workflow_version', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], WorkflowVersion);
//# sourceMappingURL=workflow-version.model.js.map