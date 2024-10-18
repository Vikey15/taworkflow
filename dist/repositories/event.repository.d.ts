import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Event, EventRelations } from '../models';
export declare class EventRepository extends DefaultCrudRepository<Event, typeof Event.prototype.eventId, EventRelations> {
    constructor(dataSource: juggler.DataSource);
}
