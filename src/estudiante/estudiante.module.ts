import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteService } from './estudiante.service';
import { EstudianteEntity } from './estudiante.entity';

@Module({
  providers: [EstudianteService],
  imports: [TypeOrmModule.forFeature([EstudianteEntity])]
})
export class EstudianteModule {}
