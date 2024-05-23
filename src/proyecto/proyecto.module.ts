import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoService } from './proyecto.service';
import { PropuestaEntity } from 'src/propuesta/propuesta.entity';
import { ProyectoController } from './proyecto.controller';

@Module({
  providers: [ProyectoService],
  imports: [TypeOrmModule.forFeature([PropuestaEntity])],
  controllers: [ProyectoController]
})
export class ProyectoModule {}
