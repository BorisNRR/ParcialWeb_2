import { IsNotEmpty, IsString } from 'class-validator'

export class PropuestaDto {

    @IsString()
    @IsNotEmpty()
    readonly titulo: string

    @IsString()
    @IsNotEmpty()
    readonly description: string

    @IsString()
    @IsNotEmpty()
    readonly palabra_clave: string

    @IsString()
    @IsNotEmpty()
    readonly profesor: string

}
