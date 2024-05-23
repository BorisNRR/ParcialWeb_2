import { ProyectoEntity } from 'src/proyecto/proyecto.module';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm'

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    codigo_estudiante: string;

    @Column()
    numero_creditos_aprobados: number;

    @OneToOne(() => ProyectoEntity, proyecto => proyecto.estudiante)
    proyecto: ProyectoEntity;
}