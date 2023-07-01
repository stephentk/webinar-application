import { Injectable } from '@nestjs/common';
import { FindOptionsWhere, ObjectId, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Webinar } from '../webinar.entity';
import { UpdateResult,DeleteResult } from 'typeorm';
import { promises } from 'dns';
import { Webinar1 } from '../webinar1.entity';
import { Webinar2 } from '../webinar2.entity';
@Injectable()
export class WebinarService {
    constructor(@InjectRepository(Webinar2)
    private webinarRepository:Repository<Webinar2>){}
    async findAll():Promise<Webinar2[]>{
        return await this.webinarRepository.find()
    }
    async findOne(id){
        return await this.webinarRepository.findByIds(id)
    }
    async create(webinar:Webinar2):Promise<Webinar2>{
        return await this.webinarRepository.save(webinar)
    }
    async update(webinar:Webinar2):Promise<UpdateResult>{
        return await this.webinarRepository.update(webinar.id,webinar)
    }
    async delete(id: string | number | Date | ObjectId | string[] | number[] | Date[] | ObjectId[] | FindOptionsWhere<Webinar>):Promise<DeleteResult>{
        return await this.webinarRepository.delete(id)
    }


}
