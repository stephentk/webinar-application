import { Controller, Get } from '@nestjs/common';
import { Webinar } from '../webinar.entity';
import { WebinarService } from './webinar.service';
import { Post,Put,Delete,Body,Param } from '@nestjs/common';
import { get } from 'http';
import { Webinar1 } from '../webinar1.entity';
import { Webinar2 } from '../webinar2.entity';

@Controller('webinar')
export class WebinarController {
    constructor (private webinarService:WebinarService){}
    @Get()
    index():Promise<Webinar2[]>{
        return this.webinarService.findAll()
    }
    @Get(':id')
    getOne(@Param('id')id){
        return this.webinarService.findOne(id)
    }
    @Post('create')
    async create(@Body() webinarData:Webinar2):Promise<any>{
        return this.webinarService.create(webinarData);
    }
    @Delete(':id/delete')
    async delete(@Param('id')id):Promise<any> {
        return this.webinarService.delete(id)
    }
}
