import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EstudianteDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    codigo_estudiante: string;

    @IsNumber()
    @IsNotEmpty()
    numero_creditos_aprobados: number;
}
