import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaService } from './propuesta.service';
import { PropuestaEntity } from './propuesta.entity';
import { PropuestaController } from './propuesta.controller';

@Module({
  providers: [PropuestaService],
  imports: [TypeOrmModule.forFeature([PropuestaEntity])],
  controllers: [PropuestaController]
})
export class PropuestaModule {}
