import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProfesorDto {

    @IsNumber()
    @IsNotEmpty()
    cedula:number

    @IsString()
    @IsNotEmpty()
    nombre:string

    @IsString()
    @IsNotEmpty()
    grupo_investigacion:string

    @IsString()
    @IsNotEmpty()
    numero_extension:string
}
