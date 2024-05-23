import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteEntity } from './estudiante.entity';
import { Repository } from 'typeorm';
import { BusinessError } from 'src/shared/errors/business-errors';

@Injectable()
export class EstudianteService {

    @InjectRepository(EstudianteEntity)
    private readonly estudianteRepository: Repository<EstudianteEntity>

    async createEstudiante(estudiante: EstudianteEntity): Promise<EstudianteEntity>{
        if(estudiante.codigo_estudiante.length == 10){
            return await this.estudianteRepository.save(estudiante)
        }
    }

    async findEstudianteById(id: string): Promise<EstudianteEntity> {
        const estudiante: EstudianteEntity = await this.estudianteRepository.findOne({where: {id}, relations: ["proyecto"] } );   
        return estudiante;
    }
}
