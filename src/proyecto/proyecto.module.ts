import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoService } from './proyecto.service';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity';

@Module({
  providers: [ProyectoService],
  imports: [TypeOrmModule.forFeature([PropuestaEntity])]
})
export class ProyectoModule {}
