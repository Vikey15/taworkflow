import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Form, FormRelations } from '../models';
export declare class FormRepository extends DefaultCrudRepository<Form, typeof Form.prototype.formId, FormRelations> {
    constructor(dataSource: juggler.DataSource);
}
