import { Controller, UseInterceptors, Get, Param, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';
import { PropuestaDto } from './propuesta.dto';
import { PropuestaEntity } from './propuesta.entity';
import { plainToInstance } from 'class-transformer';

@Controller('propuesta')
@UseInterceptors(BusinessErrorsInterceptor)
export class PropuestaController {
    constructor( private readonly propuestaService: PropuestaService ){}

    @Get()
    async findAll(){
        return await this.propuestaService.findAll()
    }

    @Get(':propuestaId')
    async findOne(@Param('propuestaId') propuestaId: string) {
      return await this.propuestaService.findPropuestaById(propuestaId)
    }
  
    @Post()
    async create(@Body() propuestaDto: PropuestaDto) {
      const propuesta: PropuestaEntity = plainToInstance(PropuestaEntity, propuestaDto)
      return await this.propuestaService.createPropuesta(propuesta)
    }
  
    @Delete(':propuestaId')
    @HttpCode(204)
    async delete(@Param('propuestaId') propuestaId: string) {
      return await this.propuestaService.deleteById(propuestaId);
    }
}