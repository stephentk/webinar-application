import { WebinarService } from './webinar.service';
import { Webinar2 } from '../webinar2.entity';
export declare class WebinarController {
    private webinarService;
    constructor(webinarService: WebinarService);
    index(): Promise<Webinar2[]>;
    getOne(id: any): Promise<Webinar2[]>;
    create(webinarData: Webinar2): Promise<any>;
    delete(id: any): Promise<any>;
}
