import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PropuestaEntity } from './propuesta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropuestaService {

    constructor(
        @InjectRepository(PropuestaEntity)
        private readonly propuestaRepository: Repository<PropuestaEntity>
    ){}

    async createPropuesta(propuesta: PropuestaEntity): Promise<PropuestaEntity>{
        if(propuesta.titulo){
            return await this.propuestaRepository.save(propuesta)
        }
    }

    async findPropuestaById(id: string): Promise<PropuestaEntity> {
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where: {id}, relations: ["profesor", "proyecto"] } );   
        return propuesta;
    }

    async findAll(): Promise<PropuestaEntity[]>{
        return await this.propuestaRepository.find({ relations: ["profesor", "proyecto"] });
    }

    async deleteById(id:string){
        const propuesta: PropuestaEntity = await this.propuestaRepository.findOne({where:{id}});
        if(!propuesta.proyecto){
            await this.propuestaRepository.remove(propuesta);
        }
    }
}
