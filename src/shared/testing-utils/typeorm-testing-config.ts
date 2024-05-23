import { TypeOrmModule } from "@nestjs/typeorm";
import { EstudianteEntity } from "src/estudiante/estudiante.entity";
import { ProfesorEntity } from "src/profesor/profesor.entity";
import { PropuestaEntity } from "src/propuesta/propuesta.entity";
import { ProyectoEntity } from "src/proyecto/proyecto.entity";

export const TypeOrmTestingConfig = () => [
    TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: [ProfesorEntity, PropuestaEntity, ProyectoEntity, EstudianteEntity],
        synchronize: true,
        keepConnectionAlive: true
    }),TypeOrmModule.forFeature([ProfesorEntity, PropuestaEntity, ProyectoEntity, EstudianteEntity]),
]