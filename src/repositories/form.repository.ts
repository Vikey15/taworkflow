import {inject} from '@loopback/core';
import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Form, FormRelations} from '../models';

export class FormRepository extends DefaultCrudRepository<
  Form,
  typeof Form.prototype.formId,
  FormRelations
> {
  constructor(
    @inject('datasources.PostgresDataSource') dataSource: juggler.DataSource,
  ) {
    super(Form, dataSource);
  }
}
