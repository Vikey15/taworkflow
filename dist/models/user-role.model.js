"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const role_model_1 = require("./role.model");
const user_model_1 = require("./user.model");
let UserRole = class UserRole extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.UserRole = UserRole;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "userRoleId", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => user_model_1.User, { name: 'user' }),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "user_id", void 0);
tslib_1.__decorate([
    (0, repository_1.belongsTo)(() => role_model_1.Role, { name: 'role' }),
    tslib_1.__metadata("design:type", String)
], UserRole.prototype, "role_id", void 0);
exports.UserRole = UserRole = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            postgresql: {
                table: 'user_role', // PostgreSQL table name
            },
            strict: true,
            validateUpsert: true, // Validate upserts
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], UserRole);
//# sourceMappingURL=user-role.model.js.map