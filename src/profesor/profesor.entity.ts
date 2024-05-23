import { PropuestaEntity } from 'src/propuesta/propuesta.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProfesorService } from './profesor.service';

@Entity()
export class ProfesorEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    grupo_investigacion: string;

    @Column()
    numero_extension: number;

    @OneToMany(() => PropuestaEntity, propuesta => propuesta.profesor)
    propuestas: PropuestaEntity[]

}
