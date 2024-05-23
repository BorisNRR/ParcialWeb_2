import { Injectable } from '@nestjs/common';
import { ProfesorEntity } from './profesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesorService {
    constructor(
        @InjectRepository(ProfesorEntity)
        private readonly profesorRepository: Repository<ProfesorEntity>
    ){}

    async createProfesor(profesor: ProfesorEntity): Promise<ProfesorEntity>{
        let values = ["TICSW", "IMAGINE", "COMIT"]
        let grupo = profesor.grupo_investigacion
        if(values.includes(grupo)){
            return await this.profesorRepository.save(profesor)
        }
    }

    async findProfesorById(id: string): Promise<ProfesorEntity> {
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where: {id}, relations: ["propuestas"] } );   
        return profesor;
    }

    async deleteById(id:string){
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{id}});
        await this.profesorRepository.remove(profesor);
    }

    async deleteByCedula(cedula:number){
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{cedula}});
        await this.profesorRepository.remove(profesor);
    }
    

}
