import { Module } from '@nestjs/common';
import { WebinarService } from './webinar/webinar.service';
import { WebinarController } from './webinar/webinar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Webinar } from './webinar.entity';
import { Webinar1 } from './webinar1.entity';
import { Webinar2 } from './webinar2.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Webinar2])],
  providers: [WebinarService],
  controllers: [WebinarController]
})
export class WebinarModule {}
