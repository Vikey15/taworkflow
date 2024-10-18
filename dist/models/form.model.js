"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const status_model_1 = require("./status.model");
const timestamp_mixin_1 = require("./timestamp.mixin");
let Form = class Form extends (0, timestamp_mixin_1.TimeStampMixin)(repository_1.Entity) {
    constructor(data) {
        super(data);
    }
};
exports.Form = Form;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        defaultFn: 'uuid',
    }),
    tslib_1.__metadata("design:type", String)
], Form.prototype, "formId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Form.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Form.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Form.prototype, "schema", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Form.prototype, "formJson", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status' }),
    tslib_1.__metadata("design:type", String)
], Form.prototype, "status_id", void 0);
exports.Form = Form = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Form);
//# sourceMappingURL=form.model.js.map