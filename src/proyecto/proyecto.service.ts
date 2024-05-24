import { Injectable } from '@nestjs/common';
import { ProyectoEntity } from './proyecto.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProyectoService {

    constructor(
        @InjectRepository(ProyectoEntity)
        private readonly propuestaRepository: Repository<ProyectoEntity>
    ){}

    async createProyecto(proyecto: ProyectoEntity): Promise<ProyectoEntity>{
        if(proyecto.fecha_fin > proyecto.fecha_inicio){
        }
        return await this.propuestaRepository.save(proyecto)
    }
}
