import { IsNotEmpty, IsString } from "class-validator"
import { uniqueEmail } from "../validators/UniqueEmail";
class CreateUserDTO {

    @IsString()
    @IsNotEmpty({ message: "O campo de nome é requerido." })
    name: string

    @IsString()
    @IsNotEmpty({ message: "O campo de E-mail é requerido." })
    @uniqueEmail({message: 'Esse email já está sendo utilizado.'})
    email: string

    @IsString()
    @IsNotEmpty({ message: "O campo de senha é requerido." })
    password: string
}
export default CreateUserDTO;