import {juggler} from '@loopback/repository';
import config from './postgres.datasource.config';

const dataSourceConfig = {
  name: 'PostgresDataSource',
  connector: 'postgresql',
  url: config.url,
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
};

export const PostgresDataSource = new juggler.DataSource(dataSourceConfig);
