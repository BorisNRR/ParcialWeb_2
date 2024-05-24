import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteDto } from './estudiante.dto';
import { EstudianteEntity } from './estudiante.entity';
import { plainToInstance } from 'class-transformer';

@Controller('estudiante')
export class EstudianteController {
    constructor(private readonly estudianteService: EstudianteService){}

    @Get()
    async findById(@Param('estudianteId') estudianteId: string){
        return await this.estudianteService.findEstudianteById(estudianteId);
    }

    @Put()
    async create(@Body() estudianteDto: EstudianteDto){
        const estudiante: EstudianteEntity = plainToInstance(EstudianteEntity, estudianteDto)
    }
}
