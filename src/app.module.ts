import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfesorEntity } from './profesor/profesor.entity';
import { ProfesorModule } from './profesor/profesor.module';
import { EstudianteEntity } from './estudiante/estudiante.entity';
import { EstudianteModule } from './estudiante/estudiante.module';
import { PropuestaEntity } from './propuesta/propuesta.entity';
import { PropuestaModule } from './propuesta/propuesta.module';
import { ProyectoEntity } from './proyecto/proyecto.entity';
import { ProyectoModule } from './proyecto/proyecto.module';
import { EstudianteService } from './estudiante/estudiante.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProfesorModule, EstudianteModule, PropuestaModule, ProyectoModule,
    TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'postgres',
     database: 'museum',
     entities: [ProfesorEntity, EstudianteEntity, PropuestaEntity, ProyectoEntity],
     dropSchema: true,
     synchronize: true,
     keepConnectionAlive: true
    })
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
