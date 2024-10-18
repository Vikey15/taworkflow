"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const status_model_1 = require("./status.model");
let Role = class Role extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Role = Role;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "roleId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => status_model_1.Status, { name: 'status' }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "status_id", void 0);
exports.Role = Role = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Role);
//# sourceMappingURL=role.model.js.map