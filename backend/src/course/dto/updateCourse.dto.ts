import { IsNotEmpty, Min, IsString, IsBoolean, IsNumber } from "class-validator"

class UpdateCourseDTO {

    @IsString()
    @IsNotEmpty({ message: "O campo de tipo é requerido." })
    type: string

    @IsString()
    @IsNotEmpty({ message: "O campo de imagem é requerido." })
    img: string

    @IsString()
    @IsNotEmpty({ message: "O campo de descrição é requerido." })
    describe: string

    @IsString()
    @IsNotEmpty({ message: "O campo de nome é requerido." })
    name: string

    @IsNumber()
    @IsNotEmpty({ message: "O campo de horas é requerido." })
    @Min(0)
    hours: number

    @IsBoolean()
    @IsNotEmpty({ message: "O campo de status é requerido." })
    status: boolean
}

export default UpdateCourseDTO;