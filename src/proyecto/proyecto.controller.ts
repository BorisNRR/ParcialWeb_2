import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoDto } from './proyecto.dto';
import { ProyectoEntity } from './proyecto.entity';
import { plainToInstance } from 'class-transformer';

@Controller('proyecto')
@UseInterceptors()
export class ProyectoController {
    constructor(private readonly proyectoService: ProyectoService){}

    @Post()
    async create(@Body() proyectoDto: ProyectoDto){
        const proyecto: ProyectoEntity = plainToInstance(ProyectoEntity, proyectoDto)
        return await this.proyectoService.createProyecto(proyecto);
    }
}
