import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebinarModule } from './webinar/webinar.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig),WebinarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
