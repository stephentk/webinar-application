import { FindOptionsWhere, ObjectId, Repository } from 'typeorm';
import { Webinar } from '../webinar.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Webinar2 } from '../webinar2.entity';
export declare class WebinarService {
    private webinarRepository;
    constructor(webinarRepository: Repository<Webinar2>);
    findAll(): Promise<Webinar2[]>;
    findOne(id: any): Promise<Webinar2[]>;
    create(webinar: Webinar2): Promise<Webinar2>;
    update(webinar: Webinar2): Promise<UpdateResult>;
    delete(id: string | number | Date | ObjectId | string[] | number[] | Date[] | ObjectId[] | FindOptionsWhere<Webinar>): Promise<DeleteResult>;
}
