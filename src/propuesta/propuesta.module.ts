import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropuestaService } from './propuesta.service';
import { PropuestaEntity } from './propuesta.entity';

@Module({
  providers: [PropuestaService],
  imports: [TypeOrmModule.forFeature([PropuestaEntity])]
})
export class PropuestaModule {}
