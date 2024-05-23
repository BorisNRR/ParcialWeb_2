import { IsDate, IsNotEmpty, IsUrl } from "class-validator";

export class ProyectoDto {
    @IsDate()
    @IsNotEmpty()
    fecha_inicio: Date

    @IsDate()
    @IsNotEmpty()
    fecha_fin: Date

    @IsUrl()
    @IsNotEmpty()
    URL: string
}
