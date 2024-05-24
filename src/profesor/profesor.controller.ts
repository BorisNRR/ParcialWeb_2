import { Body, Controller, Delete, Get, HttpCode, Param, Put } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { ProfesorEntity } from './profesor.entity';
import { plainToInstance } from 'class-transformer';
import { ProfesorDto } from './profesor.dto';

@Controller('profesor')
export class ProfesorController {
    constructor(private readonly profesorService: ProfesorService){}

    @Put()
    async create(@Body() profesorDto: ProfesorDto) {
        const profesor: ProfesorEntity = plainToInstance(ProfesorEntity, profesorDto)
    }

    @Get()
    async findOne(@Param('profesorId') profesorId:string){
        return await this.profesorService.findProfesorById(profesorId);
    }

    @Delete()
    @HttpCode(204)
    async deleteById(@Param('profesorId') profesorId: string ){
        return await this.profesorService.deleteProfesorById(profesorId)
    }

    @Delete()
    @HttpCode(204)
    async deleteByCedula(@Param('profesorCedula') profesorCedula: number ){
        return await this.profesorService.deleteProfesorByCedula(profesorCedula)
    }


}
