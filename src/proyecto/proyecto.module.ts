import { EstudianteEntity } from 'src/estudiante/estudiante.module';
import { PropuestaEntity } from 'src/propuesta/propuesta.module';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm'

@Entity()
export class ProyectoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_fin: Date;

    @Column()
    URL: string;

    @OneToOne(() => PropuestaEntity, propuesta => propuesta.proyecto)
    propuesta: PropuestaEntity;

    @OneToOne(() => EstudianteEntity, estudiante => estudiante.proyecto)
    estudiante: EstudianteEntity;
}