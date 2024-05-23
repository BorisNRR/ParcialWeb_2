import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity';
import { EstudianteController } from './estudiante.controller';

@Module({
  providers: [EstudianteService],
  imports: [TypeOrmModule.forFeature([EstudianteEntity])],
  controllers: [EstudianteController]
})
export class EstudianteModule {}
