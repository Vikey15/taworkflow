"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDataSource = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const postgres_datasource_config_1 = tslib_1.__importDefault(require("./postgres.datasource.config"));
const dataSourceConfig = {
    name: 'PostgresDataSource',
    connector: 'postgresql',
    url: postgres_datasource_config_1.default.url,
    host: postgres_datasource_config_1.default.host,
    port: postgres_datasource_config_1.default.port,
    user: postgres_datasource_config_1.default.user,
    password: postgres_datasource_config_1.default.password,
    database: postgres_datasource_config_1.default.database,
};
exports.PostgresDataSource = new repository_1.juggler.DataSource(dataSourceConfig);
//# sourceMappingURL=postgres.datasource.js.map