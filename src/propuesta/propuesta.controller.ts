import { Controller, UseInterceptors, Get } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { BusinessErrorsInterceptor } from 'src/shared/interceptors/business-errors/business-errors.interceptor';

@Controller('propuesta')
@UseInterceptors(BusinessErrorsInterceptor)
export class PropuestaController {
    constructor( private readonly propuestaService: PropuestaService ){}

    @Get()
    async findAll(){
        return await this.propuestaService.findAll()
    }

    



}