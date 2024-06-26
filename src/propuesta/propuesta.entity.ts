import { ProfesorEntity } from 'src/profesor/profesor.entity';
import { ProyectoEntity } from 'src/proyecto/proyecto.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropuestaService } from './propuesta.service';

@Entity()
export class PropuestaEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    palabra_clave: string;

    @ManyToOne(() => ProfesorEntity, profesor => profesor.propuestas)
    profesor: ProfesorEntity;

    @OneToOne(() => ProyectoEntity, proyecto => proyecto.propuesta)
    proyecto: ProyectoEntity;
}