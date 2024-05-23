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

    async validDelete(criterio, buscar) {
        let profesor: ProfesorEntity
        if( criterio == 1 ){
            let id = buscar
            const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{id} });
        } else if( criterio == 2 ){
            let cedula = buscar
            const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{cedula} });
        }

        let propuestas = profesor.propuestas
        let valid = true
        propuestas.forEach(
            propuesta => {
                if (!propuesta.proyecto){
                    valid = false
                }
            })
        return valid
    }

    async deleteProfesorById(id:string){
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{id}});
        if(this.validDelete(1, id)){
            await this.profesorRepository.remove(profesor);
        }
    }

    async deleteProfesorByCedula(cedula:number){
        const profesor: ProfesorEntity = await this.profesorRepository.findOne({where:{cedula}});
        if(this.validDelete(2, cedula)){
        await this.profesorRepository.remove(profesor);
        }
    }
    

}
